export function buildEnquiryEmail({
  name,
  phone,
  email,
  type,
  message,
}: {
  name: string;
  phone: string;
  email?: string;
  type: string;
  message?: string;
}) {
  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "full",
    timeStyle: "short",
  });

  return {
    subject: `New enquiry from ${name}`,
    html: `
<!DOCTYPE html>
<html lang="en-GB">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f7f7f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#ffffff;padding:28px 32px 20px;border-bottom:1px solid #e8e8e5;">
              <img src="https://llandaffhouse.co.uk/photos/logo.png" alt="Llandaff House" width="180" style="display:block;height:auto;margin-bottom:8px;" />
              <p style="margin:0;font-size:13px;color:#999;">
                New website enquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px 12px;">
              <p style="margin:0 0 20px;font-size:14px;color:#666;">
                Submitted ${submittedAt}
              </p>

              <!-- Name -->
              <table width="100%" style="margin-bottom:16px;">
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.5px;padding-bottom:4px;">
                    Name
                  </td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#2d2d2d;font-weight:500;">
                    ${name}
                  </td>
                </tr>
              </table>

              <!-- Phone -->
              <table width="100%" style="margin-bottom:16px;">
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.5px;padding-bottom:4px;">
                    Phone
                  </td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#2d2d2d;">
                    <a href="tel:${phone.replace(/\s/g, "")}" style="color:#1a5c50;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              ${email ? `
              <table width="100%" style="margin-bottom:16px;">
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.5px;padding-bottom:4px;">
                    Email
                  </td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#2d2d2d;">
                    <a href="mailto:${email}" style="color:#1a5c50;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>
              ` : ""}

              <!-- Type -->
              <table width="100%" style="margin-bottom:16px;">
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.5px;padding-bottom:4px;">
                    Enquirer type
                  </td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#2d2d2d;">
                    ${type}
                  </td>
                </tr>
              </table>

              <!-- Message -->
              ${message ? `
              <table width="100%" style="margin-bottom:8px;">
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.5px;padding-bottom:4px;">
                    Message
                  </td>
                </tr>
                <tr>
                  <td style="font-size:15px;color:#2d2d2d;line-height:1.6;background:#f7f7f5;border-radius:8px;padding:16px;">
                    ${message.replace(/\n/g, "<br/>")}
                  </td>
                </tr>
              </table>
              ` : ""}
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <hr style="border:none;border-top:1px solid #e8e8e5;margin:12px 0;" />
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:12px 32px 28px;">
              <p style="margin:0;font-size:13px;color:#999;">
                Reply directly to this email or call <a href="tel:${phone.replace(/\s/g, "")}" style="color:#1a5c50;text-decoration:none;font-weight:500;">${phone}</a> to respond.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f7f7f5;padding:16px 32px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#bbb;">
                Powered by <a href="https://ateb.ai" style="color:#6478FF;text-decoration:none;font-weight:500;">Ateb</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
  };
}
