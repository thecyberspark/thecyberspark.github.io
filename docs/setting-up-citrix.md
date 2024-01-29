---
sidebar_position: 2
title: Setting up Citrix
description: This guide will walk you through the essential steps to set up your development environment and get started with the project.
sidebar_label: Setting up Citrix
---

# Setting up Citrix

<aside>
:::info 📒Prerequisites
Before setting up Citrix, you should have the following things ready:
:::

</aside>

1. You should get an Email from ZF which contains a **_Ping QR Code_**, which looks like this:
![External image](../static/img/setting/ss1.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled.png) -->

2. A temporary password. This will be either Mailed to you or you will get it via Slack.
3. install the Citrix Workspace.

   :::info
   [**_Click Here_**](https://res.craft.do/user/full/94b827d2-fdca-b35d-bc98-6f51011fcb80/doc/0F2337E6-EA18-4B38-8DE4-CF522D3B2DEC/87C593A6-52FC-4C4B-9A5C-72488502AD8D_2/HDM8HYeIxPKP5V3ep31xMFZhxoXFubg8GxFYaWm5oAsz/01%20HowTo_InstallCitrixWorkspaceApp%201.pdf) to check the **_ZF_** manual
   :::

4. Upon completion of the installation, you may encounter a specific page. At this point, please close the application. We will utilize a configuration file for further setup procedures at a later stage.
![External image](../static/img/setting/ss2.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%201.png) -->

## Register the **_Ping ID_** on your phone

1. Proceed to install the Ping ID application on your mobile device.
   1. Play Store: [https://play.google.com/store/apps/details?id=prod.com.pingidentity.ping&pli=1](https://play.google.com/store/apps/details?id=prod.com.pingidentity.ping&pli=1)
   2. App Store: [https://apps.apple.com/us/app/pingid/id891247102](https://apps.apple.com/us/app/pingid/id891247102)
   3. Microsoft Store: [https://www.pingidentity.com/en/resources/downloads/pingid.html](https://www.pingidentity.com/en/resources/downloads/pingid.html)

:::warning Info ✨
Once installed, please utilize the QR code presented in Step 1, or manually input the code. This process will link your phone to the ZF identity management system and prompt for an OTP/Pin each time you log in.
:::

## Login Using Temporary Password

1. Proceed to [**_access.zf.com_**](http://access.zf.com/)
![External image](../static/img/setting/ss3.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%202.png) -->

2. Choose Ping ID Authentication / Sign in with Ping ID
![External image](../static/img/setting/ss4.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%203.png) -->

3. Please provide your ZF email or ZF number, and click **_SIGN ON_**
![External image](../static/img/setting/ss5.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%204.png) -->

4. After clicking "Sign On", a notification will be sent to your Ping ID app. Please proceed by approving this.
![External image](../static/img/setting/ss25.png)
![External image](../static/img/setting/ss15.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%205.png)

![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%206.png) -->

5. After completing this step, you'll be directed to a new page where you're required to input your temporary password.
![External image](../static/img/setting/ss6.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%207.png)
 -->

6. Following this, you should be presented with the below page. We recommend using the light version at this time.
![External image](../static/img/setting/ss16.png)
<!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%208.png) -->

7. You should then be able to view the remote desktops associated with your account.
   ![External image](../static/img/setting/ss7.png)
      <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%209.png) -->

      <aside>
      :::warning Info
      ✨ If you are not able to see any shared desktop, it means that your account is new and you may
      need to wait until it appears here
      :::

      </aside>

## Setup Citrix app (Not using light mode)

1.  Please navigate to your Citrix dashboard. Once there, locate and click on the settings icon in the top right corner. From the dropdown menu, proceed to 'Account Settings'.
    ![External image](../static/img/setting/ss17.png)
    <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2010.png) -->

:::warning
✨ Download the citrix config file using "**Activate Citrix Workspace App**" as shown in screenshot above.
:::

### Then follow the next steps based on your OS:

For Linux:

1.  Please select the configuration file, right-click on it, and choose to open with the Citrix Store app.

    ![External image](../static/img/setting/ss8.png)
    <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2011.png) -->

                        2. Then click on **_ADD_**

                    ![External image](../static/img/setting/ss9.png)
                    <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2012.png) -->

                        For Windows:

                        1. Please right-click on the configuration file and select 'Open' in Citrix. Subsequently, and then click on **_ADD_**.

                ![External image](../static/img/setting/ss18.png)
                ![External image](../static/img/setting/ss19.png)
                <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2013.png)

                        ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2014.png) -->

                        FOR MAC:

                        1. right click on the configuration file and open it with Citrix app, click in AGREE nd then open the citrix app, or it is opened already with this screen

                ![External image](../static/img/setting/ss20.png)
                ![External image](../static/img/setting/ss21.png)
                <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2015.png)

                        ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2016.png) -->

                        2. Then Select the "Shared Desktop”

                ![External image](../static/img/setting/ss10.png)
                <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2017.png) -->

                        3. It will login you to the Remote Desktop

            ![External image](../static/img/setting/ss11.png)
            <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2018.png) -->

                        4. Please proceed by opening "Chrome" to access the JIRA, Confluence, or Reset Password page link.

## How to reset the password

1.  Once you've gained access to the shared desktop via the Citrix app or Citrix light mode
2.  Please access the following link via the browser on your virtual machine:
    [https://zim.zf-world.com/IdentityManagerPWPortal-zfworld](https://zim.zf-world.com/IdentityManagerPWPortal-zfworld)

            ![External image](../static/img/setting/ss12.png)
            <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2019.png) --> 3. Select I want to use my username password and proceed

            ![External image](../static/img/setting/ss22.png)
            <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2020.png) -->

                            4.  Please proceed as indicated.

            ![External image](../static/img/setting/ss23.png)
            <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2021.png) -->

## Access Jira

:::info
✨ Login to shared desktop using citrix
:::

### For Jira

Past the following URL in your browser: [https://jira.zf-world.com/login.jsp](https://jira.zf-world.com/login.jsp)

1.  Click on **_“continue with username and password”_** as shown in the figure

            ![External image](../static/img/setting/ss13.png)

        <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2022.png) -->

                            2. Now kindly proceed with authentication by providing your ZF number and password

            ![External image](../static/img/setting/ss24.png)

        <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2023.png) -->

                            3. Now you will be able to access all **_JIRA_** ticket links using your browser.

            ![External image](../static/img/setting/ss14.png)

        <!-- ![Untitled](00%20Setting%20Up%20Citrix%20d0cb869b77554a2984ee86d9345478bf/Untitled%2024.png) -->
        :::info

    ✨ All **_JIRA_** links given in "**_VGame_**" can be opened in **_citrix browser now_**.
    :::

**Useful Links:** (All these links to be opened in the Remote Desktop)

> [JIRA](https://jira.zf-world.com/login.jsp)

> [Confluence](https://confluence.zf-world.com/)

> [Reset Password](https://zim.zf-world.com/IdentityManagerPWPortal-zfworld)
