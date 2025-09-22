# Screen → Route Mapping

List every Stitch screen and where it will live in the app. Update as you paste.

| Stitch Folder Name                               | Target Route          | Notes / Status           |
|--------------------------------------------------|-----------------------|--------------------------|
| antobot_pricing_page                             | /pricing              | CTA → Square link        |
| antobot_dashboard                                | /dashboard            | Active state first       |
| antobot_payment_success_confirmation              | /payment/success      | Redirect landing         |
| antobot_contact_form                             | /contact              |                          |
| antobot_legal_pages_(pick_one_variant)           | /legal                | Choose 1, not all        |
| antobot_home_landing_page_(when_ready)           | /                     | Paste last               |
| antobot_auth_sign_in_(variant)                   | /sign-in              | UI only at first         |
| antobot_auth_sign_up_(variant)                   | /sign-up              | UI only at first         |
| antobot_auth_forgot_password_(variant)           | /forgot-password      | UI only at first         |

Checklist per paste:
- Match visual to screen.png (mobile + desktop)
- Keep Tailwind classes intact
- Real links to real routes (no 404)
- Risk disclaimer visible on marketing pages
- Pricing CTAs read env Square links
