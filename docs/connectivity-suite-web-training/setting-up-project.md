---
sidebar_position: 3
sidebar_label: Setting up the project
slug: /setting-up-the-project
---

# 02. Setting up IntelliJ, codebase and necessary plugins

Before starting, clone cs-ui-app from the GitLab to the local machine

<aside>

>

</aside>

:::tip[Repository Link]
💡 Before starting, clone **cs-ui-app** from the **GitLab** to the local machine. <br/>
**cs-ui-app** : [**_Repository Link_**](https://vcu-gitlab.northeurope.cloudapp.azure.com/connectivitysuite/applications/cs-app-uis)
:::

<div>
<YoutubeEmbed />
</div>

<!--
[https://drive.google.com/drive/u/1/home](https://drive.google.com/drive/u/1/home)

[https://maps-grin-li1.craft.me/5Y6iD6x8fvNrH9](https://maps-grin-li1.craft.me/5Y6iD6x8fvNrH9) -->

## Cloning the Repository to Local Machine

<aside>
💡 **To access these apps locally, follow the below given procedure.**

</aside>

1. After going to **_GitLab_**, copy the URL and clone the repository to the local Machine. Refer **_Fig 1.0_**

   **_Figure 1.0_**

2. Open your IntelliJ IDE, click **_get from VCS_** and then paste your URL to clone the repository. **_Refer Fig 1.20_**

   **_Figure 1.20_**

3. After pasting the **_repository URL_**, your IDE will briefly prompt you for **_authorization_**. This is a **_one-time_** setup to establish your connection with the remote repository and grant access. Once you enter your credentials and complete authorization, the cloning process will begin automatically. A new window will then appear showcasing the downloaded files and folders, ready for you to explore and start working on. **_Refer Fig 1.30 & 1.31_**

   **_Figure 1.30_**

   **_Figure 1.31_**

4. Once you are inside the IDE, look for the **_Project Structure_** `***File > Project Structure`.**_ Click it and a new window will appear. _**Refer Fig 1.40, 1,41\*\*\*

   **_Figure 1.40_**

   **_Figure 1.41_**

5. Once the new window appears, go to **_Modules_**, and search for a **_+_** icon to add a **_New Module. In this section, search for "Languages" within the module catalog, select "JavaScript", and finally click the "Create" button._** This will establish a fresh JavaScript module for your project. **_Refer Fig 1.50_**

   **_Figure 1.50_**

6. After the above step, the IntelliJ IDE will start indexing and as the indexing is over you will see the following window, where the `**apps`** and `**libs**`are present. \***Refer Fig 1.60\*\*\*

   **_Figure 1.60_**

7. With the indexing completed and all folders readily accessible, you might encounter a few node dependencies needing installation. To tackle this, simply head over to your terminal and reference the provided code snippet within the documentation. With a quick execution, you'll be equipped with the necessary dependencies to proceed further.

   ```jsx
   npm install or npm i or yarn install //to install all the node dependencies
   ```

   **_The Terminal icon can be easily accessed from the taskbar at the bottom of your screen_**

8. Now as all the **_configurations_** and **_dependencies_** are installed, we need to install a couple of `***plugins*`** as well. These plugins are quiet important as they help developers to keep their code clean, organized, and easy to read. \***Refer the Fig 1.80, 1.81 below.\*\*\*

   **_Figure 1.80_**

   **_Figure 1.81_**

9. As you have installed the plugin, go to **_Settings > Plugins_** and search for prettier, and then **_refer Fig 1.91_** and then follow the above settings.

   **_Figure 1.90_**

   **_Figure 1.91_**

10. After installing prettier, you need to install **_Nx Console Idea as well. Refer Fig 1.10_**

<aside>
>💡 Initially, you may not see the "apps" and "libs" folders mentioned in #01. This is because some configurations are needed to set them up and enable the full functionality of the system.

</aside>

<aside>
:::note
📒 The provided links `**ptx-master**` give you access to both development and production versions of the deployed apps. The links containing **`-dev`** signify the development environment, where you can experience and test features currently under development. To access the final, fully deployed versions, simply remove **`-dev`** from the corresponding link. This allows you to easily switch between environments for testing and exploration.
:::

</aside>

:::info[info]
**UI-Demo :** [https://ui-demo-dev.zf-v2x.com/](https://ui-demo-dev.zf-v2x.com/)
**Device Manager:** [https://device-manager-dev.zf-v2x.com/](https://device-manager-dev.zf-v2x.com/)

**Fleet Configurator:** [https://fleet-configurator-dev.zf-v2x.com/](https://fleet-configurator-dev.zf-v2x.com/)

**Fleet Monitor: (FM):** [https://fleet-monitor-dev.zf-v2x.com/](https://fleet-monitor-dev.zf-v2x.com/)

**Landing Page:** [https://cs-dev.zf-v2x.com](https://cs-dev.zf-v2x.com/)

**Pro Connect Invehicle:** [https://proconnect-invehicle-dev.zf-v2x.com/](https://proconnect-invehicle-dev.zf-v2x.com/)

**Remote operations:** [https://remote-operations-dev.zf-v2x.com/](https://remote-operations-dev.zf-v2x.com/)

**Service Space:** [https://service-space-dev.zf-v2x.com/](https://service-space-dev.zf-v2x.com/)

**User Manager:** [https://user-manager-dev.zf-v2x.com/](https://user-manager-dev.zf-v2x.com/)

**Vehicle Calendar**: [https://vehicle-calendar-dev.zf-v2x.com/](https://vehicle-calendar-dev.zf-v2x.com/)
:::

## Run Apps Locally

1. Running apps locally is a breeze thanks to the dedicated `**.run**` folder. This folder aggregates all apps available on the master branch, providing easy access for experimentation. As illustrated in **_Figure 2.0_**, a simple click on the dropdown reveals a list of readily compilable apps. Select any app, and your IDE takes care of the magic, generating a local **_URL_** for instant testing and exploration.

   **_Figure 2.0_**

:::note[Note]
💡 **NOTE:** If IntelliJ IDEA is not detecting the run configs ( sometimes it happens ) you can run the apps manually
by running these command in the Inbuilt Terminal of IntelliJ

```js title="bash"
npm run nx serve cs-uidemo:serve:development
npm run nx serve cs-fleetconfig:serve:development
npm run nx serve cs-devicemanager:serve:development
npm run nx serve cs-fleetmon:serve:development
npm run nx serve cs-lp:serve:development
npm run nx serve cs-proconnect-invehicle:serve:development
npm run nx serve cs-remoteoperations:serve:development
npm run nx serve cs-servicespace:serve:development
npm run nx serve cs-usermanager:serve:development
npm run nx serve cs-vehiclecalendar:serve:development
```

:::

<details>
  <summary><b>💡 Remember</b></summary>
  <div>
    <div>

There are 2 types of modes, in which each app can run.

1.  **Live Mode.**
2.  **Mock Mode:** Doesn’t need backend to run, as there’s is a lot of data which needs to be fetched from the backend, but if the backend is not available, we create a virtual backend that serves up dummy data, mimicking real-world interactions, all within the app itself.

📒 To **_activate Mock Mode_**, head to your app's `**environment.ts**` file and set `**isMockEnabled`** to `**true\*\*`. Boom! You're now cruising in offline mode, ready to test and iterate without external dependencies.

</div>

  </div>
</details>

export const YoutubeEmbed = () => (

  <div style={{width: '100%', height:'100%'}}>
<iframe width="870" height="400" src="https://www.youtube.com/embed/gys_aEdmBQk?si=sg9f_nQewTH-eEOL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);
