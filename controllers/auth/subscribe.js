const User = require('../../models/user');
const { HttpError, sendEmail } = require('../../helpers');

const subscribe = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  const userName = user.name || user.email;

  if (!user) {
    throw HttpError(404, 'User not found');
  }

  await User.findByIdAndUpdate(user._id, { subscription: true });

  const subscriptionEmail = {
    to: email,
    subject: 'Subscription email SoYummy',
    html: `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      h1, h2 {margin:0}
      p { display:block;margin:13px 0; }</style><!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]--><!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type="text/css">[owa] .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type="text/css">@media only screen and (max-width:479px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }</style><style type="text/css"></style></head><body style="word-spacing:normal;background-color:#f6ffe0;">
    <div style="background-color:#f6ffe0;"><table align="center" background="https://0ynki.mjt.lu/tplimg/0ynki/b/ms403/x51yu.jpeg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url('https://0ynki.mjt.lu/tplimg/0ynki/b/ms403/x51yu.jpeg') center top / auto no-repeat;background-position:center top;background-repeat:no-repeat;background-size:auto;width:100%;"><tbody><tr><td>
    <!--[if mso | IE]><v:rect style="mso-width-percent:1000;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="https://0ynki.mjt.lu/tplimg/0ynki/b/ms403/x51yu.jpeg" type="tile" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]--><div style="margin:0px auto;max-width:600px;"><div style="line-height:0;font-size:0;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:40px 0px 40px 0px;padding-bottom:40px;padding-left:0px;padding-right:0px;padding-top:40px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr>
    <td class="" style="vertical-align:top;width:600px;" ><![endif]-->
    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr>
    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:0px;word-break:break-word;">
    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:37px;line-height:1;text-align:left;color:#000000;"><h2 class="text-build-content" style="text-align:center;; margin-top: 10px; font-weight: normal;" data-testid="vBieIV0nC02Y1-c9cejVv"><span style="color:#ffffff;"></span></h2>
    <h2 class="text-build-content" style="text-align:center;; font-weight: normal;" data-testid="vBieIV0nC02Y1-c9cejVv"><span style="color:#8BAA36;font-family:Roboto, Helvetica, Arial, sans-serif;font-size:20px;"><b>You have successfully subscribed to the newsletter from</b></span></h2><h1 class="text-build-content" style="text-align:center;; font-weight: normal;" data-testid="vBieIV0nC02Y1-c9cejVv">
    <span style="color:#5e5e5e;font-family:Roboto, Helvetica, Arial, sans-serif;font-size:37px;"><b>So</b></span><span style="color:#8BAA36;font-family:Roboto, Helvetica, Arial, sans-serif;font-size:37px;"><b>Yummy!</b></span></h1></div></td></tr><tr>
    <td align="center" vertical-align="middle" style="background:transparent;font-size:0px;padding:20px 25px 10px 25px;padding-top:20px;padding-right:25px;padding-left:25px;word-break:break-word;">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tbody><tr><td align="center" bgcolor="#8baa36" role="presentation" style="border:none;border-radius:30px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;background:#8baa36;" valign="middle"><a href="https://serhii-vasylenko.github.io/goit-final-project/signin" style="display:inline-block;background:#8baa36;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:30px;" target="_blank">
    <span style="background-color:transparent;color:#FAFAFA;font-family:Arial;font-size:14px;margin-bottom:40px;">
    <b>Visit site</b></span></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>
    </td></tr></table><![endif]--></td></tr></tbody></table></div></div><!--[if mso | IE]></td></tr></table></v:textbox>
    </v:rect><![endif]--></td></tr></tbody></table><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]--><div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 25px 10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile"><tbody><tr><td style="width:300px;" class="mj-full-width-mobile"><img alt="" src="https://0ynki.mjt.lu/tplimg/0ynki/b/ms403/x519h.png" style="border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300" height="auto"></td></tr></tbody></table></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0; margin-top: 10px;"><span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;">Dear ${userName},</span></p>
    <p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;"><span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;"></span></p><p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;">
    <span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;">Thank you for your subscription to our recipe site. We greatly appreciate your support and the trust you place in us for your culinary needs.</span></p><p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;"><span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;"></span></p><p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;">
    <span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;">As a valued subscriber, you have access to a wide range of delicious recipes, cooking tips, and culinary inspiration. Our team works diligently to curate a diverse collection of recipes that cater to various tastes and dietary preferences.</span></p>
    <p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;">
    <span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;"></span></p>
    <p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;">
    <span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;">We are committed to providing you with a seamless culinary experience, and we value your feedback. Please don't hesitate to reach out to our customer support team with any questions or suggestions you may have.</span></p><p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;">
    <span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;"></span></p>
    <p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;">
    <span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;">Thank you for being a part of our recipe community. We look forward to bringing you more delightful recipes and culinary adventures in the future.</span></p><p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0;"><span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;"></span></p>
    <p class="text-build-content" data-testid="skiE2WI9pkz_yYxnXcO5E" style="margin: 10px 0; margin-bottom: 10px;">
    <span style="color:#5e6977;font-family:Arial;font-size:15px;line-height:22px;">Warm regards,</span><br>
    <span style="color:#8baa36;font-family:Arial;font-size:15px;line-height:22px;">SoYummy</span><br>&nbsp;</p></div></td></tr>
    <tr><td align="center" style="font-size:0px;padding:10px 25px 10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td>
    <![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr><td style="padding:4px;vertical-align:middle;">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#8baa36;border-radius:3px;width:20;"><tbody><tr><td style="padding:0px 0px 0px 0px;font-size:0;height:20;vertical-align:middle;width:20;">
    <a href="https://www.facebook.com/sharer/sharer.php?u=[[SHORT_PERMALINK]]" target="_blank"><img height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;display:block;" width="20"></a></td></tr></tbody></table></td></tr></tbody></table>
    <!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#8baa36;border-radius:3px;width:20;"><tbody><tr><td style="padding:0px 0px 0px 0px;font-size:0;height:20;vertical-align:middle;width:20;"><a href="https://twitter.com/intent/tweet?url=[[SHORT_PERMALINK]]" target="_blank"><img height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" style="border-radius:3px;display:block;" width="20"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#8baa36;border-radius:3px;width:20;"><tbody><tr><td style="padding:0px 0px 0px 0px;font-size:0;height:20;vertical-align:middle;width:20;"><img height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png" style="border-radius:3px;display:block;" width="20"></td></tr></tbody></table></td></tr></tbody></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#8baa36;border-radius:3px;width:20;"><tbody><tr><td style="padding:0px 0px 0px 0px;font-size:0;height:20;vertical-align:middle;width:20;"><img height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" style="border-radius:3px;display:block;" width="20"></td></tr></tbody></table></td></tr></tbody></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:center;color:#000000;"></div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:center;color:#000000;"></div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`,
  };

  await sendEmail(subscriptionEmail);

  res.json({
    status: 'success',
    code: 200,
    message: 'Subscription email is sent',
  });
};

module.exports = subscribe;
