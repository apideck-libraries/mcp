#!/usr/bin/env python3
"""
Generate a Speakeasy MCP overlay that includes only the specified Apideck APIs.

Usage:
    python generate-overlay.py                          # Default: accounting,crm,hris,vault,proxy
    python generate-overlay.py accounting               # Accounting only
    python generate-overlay.py accounting,crm           # Accounting + CRM
    python generate-overlay.py accounting,crm,hris      # Accounting + CRM + HRIS
    python generate-overlay.py all                      # All APIs (no filtering)

Then run: speakeasy run
"""

import sys
import yaml

SPEC_FILE = "speakeasy-spec.yml"
OUTPUT_FILE = "mcp-overlay.yaml"

# All available API prefixes
ALL_APIS = {
    "accounting": "/accounting/",
    "ats": "/ats/",
    "connector": "/connector/",
    "crm": "/crm/",
    "ecommerce": "/ecommerce/",
    "fileStorage": "/file-storage/",
    "hris": "/hris/",
    "issueTracking": "/issue-tracking/",
    "proxy": "/proxy",
    "sms": "/sms/",
    "vault": "/vault/",
    "webhook": "/webhook/",
}

DEFAULT_APIS = [
    "accounting",
    "ats",
    "connector",
    "crm",
    "ecommerce",
    "fileStorage",
    "hris",
    "issueTracking",
    "proxy",
    "vault",
    "webhook",
]


def main():
    # Parse args
    if len(sys.argv) > 1:
        if sys.argv[1] == "all":
            selected = list(ALL_APIS.keys())
        else:
            selected = [a.strip() for a in sys.argv[1].split(",")]
    else:
        selected = DEFAULT_APIS

    # Validate
    for api in selected:
        if api not in ALL_APIS:
            print(f"Error: Unknown API '{api}'. Available: {', '.join(ALL_APIS.keys())}")
            sys.exit(1)

    # Load spec
    with open(SPEC_FILE) as f:
        spec = yaml.safe_load(f)

    # Find paths to disable
    keep_prefixes = [ALL_APIS[api] for api in selected]
    disable_paths = []
    keep_count = 0

    for path in sorted(spec.get("paths", {}).keys()):
        keep = any(path.startswith(p) or path == p.rstrip("/") for p in keep_prefixes)
        if keep:
            keep_count += 1
        else:
            disable_paths.append(path)

    # Count operations
    op_count = 0
    for path in spec.get("paths", {}).keys():
        keep = any(path.startswith(p) or path == p.rstrip("/") for p in keep_prefixes)
        if keep:
            for method in ["get", "post", "put", "patch", "delete", "head", "options"]:
                if method in spec["paths"][path]:
                    op_count += 1

    # Generate overlay
    actions = []

    # Disable excluded paths
    for path in disable_paths:
        actions.append(
            {
                "target": f'$.paths["{path}"].*',
                "update": {"x-speakeasy-mcp": {"disabled": True}},
            }
        )

    # Scope annotations
    actions.append(
        {
            "target": '$.paths.*["get","head"]',
            "update": {"x-speakeasy-mcp": {"scopes": ["read"]}},
        }
    )
    actions.append(
        {
            "target": '$.paths.*["post","put","patch"]',
            "update": {"x-speakeasy-mcp": {"scopes": ["write"]}},
        }
    )
    actions.append(
        {
            "target": '$.paths.*["delete"]',
            "update": {"x-speakeasy-mcp": {"scopes": ["destructive"]}},
        }
    )

    overlay = {
        "overlay": "1.0.0",
        "info": {
            "title": f"Apideck MCP Overlay — {', '.join(api.title() for api in selected)}",
            "version": "0.0.1",
        },
        "actions": actions,
    }

    with open(OUTPUT_FILE, "w") as f:
        yaml.dump(overlay, f, default_flow_style=False, sort_keys=False, allow_unicode=True)

    print(f"Generated {OUTPUT_FILE}")
    print(f"  APIs included: {', '.join(selected)}")
    print(f"  Paths kept: {keep_count}")
    print(f"  Paths disabled: {len(disable_paths)}")
    print(f"  Operations: ~{op_count}")
    print()
    print("Next: speakeasy run")


if __name__ == "__main__":
    main()
