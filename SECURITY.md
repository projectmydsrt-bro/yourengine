# Security Policy

## Supported Versions

This project follows a clear policy for security updates:

- Only the latest stable version of dsrt.js is actively maintained for security fixes.
- Older versions may not receive patches; users are encouraged to upgrade.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately:

- Contact: **security@dsrtjs.com**
- Provide a detailed description, steps to reproduce, and potential impact.
- Do not disclose the vulnerability publicly until it is patched.

## Response

Once a report is received:

1. The security team will acknowledge receipt within 24 hours.
2. The issue will be investigated and prioritized based on severity.
3. A fix will be developed and released.
4. Public disclosure will be coordinated to ensure users can upgrade safely.

## Best Practices

- All external dependencies are monitored for vulnerabilities.
- Loader system validates and sanitizes all external 3D models and assets.
- Shader code runs in a sandboxed environment to prevent malicious execution.
- Regular audits and automated CI/CD checks ensure security compliance.
