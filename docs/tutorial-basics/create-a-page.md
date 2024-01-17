---
sidebar_position: 2
sidebar_label: Getting Started with the Project
slug: /getting-started-with-the-project
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 01. Getting Started with the Project

Set up the enviorment to start developing and contributing to the cs-ui-apps.

## **Prerequisites**

Before diving in, ensure you have the following software installed on your machine:

- **[NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):**  Used for running the project's JavaScript dependencies.
- **[GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git):**  A distributed version control system for managing code revisions.
- **Yarn (Optional):**  A package manager for JavaScript that can be used as an alternative to NodeJS.

<aside>
⬇️**Note:** You can install NodeJS using the below code snippets. After Installing NodeJS, download the latest version of ***npm***, on the command line, run the following command:

<Tabs>
  <TabItem value="NPM" label="NPM" default>
 ```jsx
npm install -g npm //to insatll npm
node -v //to check node version
npm -v // to check npm version
```
  </TabItem>

  <TabItem value="YARN" label="YARN">
     ```jsx
npm install -g yarn //to insatll Yarn
node -v //to check node version
yarn --version // to check npm version
```
  </TabItem>

</Tabs>

</aside>

<aside>
⬇️ **Note:** After Installing Git, check the latest version of ***git***, on the command line, run the following command:

```jsx
git version //to check the version of git
```

</aside>

## **Setting Up Your Development Environment**

1. **[Install IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/download/?section=windows):** Download and install **IntelliJ IDE Ultimate**, a powerful IDE for developing web applications.
2. **[Clone the cs-ui-apps repository](https://vcu-gitlab.northeurope.cloudapp.azure.com/connectivitysuite/applications/cs-):** Use the provided **_GitLab URL_** to clone the **`cs-ui-apps`** repository locally. You'll need the credentials shared with you for authentication.

## **Branching System:**

The repositories uses a branching system to manage different development streams. Here are some key branches:

- **`master`**: The primary branch for all contributions. Specific rules and regulations govern pushing changes to this branch.
- **`ptx-master`**: Branch dedicated to Pragtex GmbH Company (ptx).
- **`ds-master`**: Branch dedicated to Double Slash GmbH Company (ds).
- **`spyrosoft-master`**: Branch dedicated to Spyro Soft Company.

<aside>
:::info[Info]

💡 The repository currently holds around 15 distinct Angular applications, each managed and maintained by a specific company.

:::

</aside>

## **Applications and Design Documents:**

For design guidance, you'll find a **`Styleguides (Adobe XD)`** section within the **`ui-demo`** application's
**`Components > others`** folder. These Adobe XD files serve as blueprints for all applications, detailing the page and component designs before development starts. Some key design documents include:

- **ZF Design System:** Defines common styles for all applications.
- **Landing Page**
- **Fleet Monitoring**
- **Landing Page**
- **Fleet Monitoring**
- **Fleet Configurator**
- **Device Manager**
- **Remote Diagnostics**
- **Mission Manager**
- **Map Manager**
- **Vehicle Calendar**
- **Service Space**
- **Update Manager**
- **Remote Operations**
- **User Manager**
- **ZF ProConnect (Shuttle applications)**
- **Customer Operations Concept Analysis (COCA)**
- **Sensor Data Manager (SDM)**

<aside>
💡 To create these applications and components, we must adhere to these design rules only, utilize shared components from the **`[libs](https://vcu-gitlab.northeurope.cloudapp.azure.com/connectivitysuite/applications/cs-app-uis/-/tree/master/libs)`** folder when building your applications.

</aside>

# **Development Guidelines:**

## **Branching and Application Ownership in the cs-ui-apps Project**

**Master Branch - Common Ground for Shared Assets:**

The **`master`** branch serves as the central hub for shared components and applications within the **`cs-ui-apps`** project. Here's what you'll find:

- **Apps:** Only one application resides in the **`apps`** folder - **`ui-demo`**. This serves as a common reference point for development practices and component usage.
- **Libs:** The **`[libs](https://vcu-gitlab.northeurope.cloudapp.azure.com/connectivitysuite/applications/cs-app-uis/-/tree/master/libs)`** folder houses all the shared components, further organized into subdirectories and modules for easier navigation. We'll delve deeper into their structure later.

**Contributing to the Master Branch:**

All participating companies, including **_Pragtex GmbH_**, are responsible for contributing to the **`master`** branch. Jira tickets related to this branch are easily identified by the prefix `CSUI - **`.

**Pragtex GmbH's Assigned Applications:**

Currently, Pragtex GmbH is responsible for maintaining and developing the following applications in **_addition to the shared_**

`ui-demo` app :

- `device-manager`
- `fleet-configurator`
- `fleet-monitor`
- `landing-page`
- `pro-connect-invehicle`
- `remote-operations`
- `service-space`
- `user-manager`
- `vehicle-manager`

**Navigating the ptx-master Branch:**

The `ptx-master` branch builds upon the foundation of the **`master`** branch, incorporating all the shared components and common apps. Additionally, it includes the specific applications assigned to **Pragtex GmbH**, listed above, within the **`apps`** directory.

**End-to-End Testing Folders:**

For each application within the **`apps`** folder, you'll find a dedicated **`-e2e`** folder. This folder contains the end-to-end tests written to ensure the functionality of each application.

<details>
  <summary>Contribution Guidelines</summary>
  <div>
    <div>Detailed guidelines and regulations governing repository contributions are covered in ***SECTION - 3***: How to contribute.</div>
  </div>
</details>
<details>
  <summary>e2e Testings</summary>
  <div>
    <div>We'll explore this topic further in ***SECTION - 4:*** All about e2e tests.</div>
    <br/>
  </div>
</details>
