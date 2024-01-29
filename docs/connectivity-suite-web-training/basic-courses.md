---
sidebar_position: 1
sidebar_label: Basic Courses
slug: /basic-courses
---

# Basic Courses

This course is for the Interns, which are new to the `cs-ui-app project`

This course is for the Interns, which are new to the `cs-ui-app project` and starting to contribute to the project. These courses will provide you with the foundation you need to get involved. With Advanced CSS/SCSS to Angular and Spring Boot.

<div>
:::tip[Info]
The cyberspark-training Slack section contains a link to the shared credentials. Please refer to it for access.
:::

</div>

<details>
  <summary><b> Front End Courses</b> </summary>
  <div>
    <div>
      💡By these courses, you will get a complete understanding of CSS/SCSS and
      Angular. After this you'll be able to start contributing to the
      project.{" "}
    </div>
    <br />
    <details>
      <summary>
        <b>Basic css/scss Bootcamp</b>
      </summary>
      <div>
        <strong>
          Reinforce your CSS concepts with Course: Advanced CSS and Sass
          Flexbox, Grid, Animations and More!{" "}
        </strong>
      </div>
      <div align--items--center>
        <Scss />
      </div>
    </details>
    <br />
    <details>
      <summary>
        <b>The Modern Angular Bootcamp</b>
      </summary>
      <div>
        <strong>
          Get ready with Angular! Understand how to build and deploy
          production-ready apps.{" "}
        </strong>
      </div>
      <div>
      
        <AngularCourse />
        <div> 
        <center>**Relevant Topics to cover**</center>
        ![External image](../../static/img/image1.jpg)
        ![External image](../../static/img/image2.jpg)
        ![External image](../../static/img/image3.jpg)
        ![External image](../../static/img/image4.jpg)
        ![External image](../../static/img/image5.jpg)
        ![External image](../../static/img/image6.jpg)
        </div>
      </div>
    </details>
  </div>
</details>

<details>
  <summary><b>Angular Crash Course</b></summary>
  <div>
    <div>
      Taking this optional course is an excellent way to elevate your Angular knowledge
    </div>
      <div top= "10px" align--items--center>
        <AngularCrashCourse />
      </div>
    <br />
  </div>
</details>

export const AngularCourse = () => (

  <div style={{marginTop : '20px'}}>
    <a
      style={{
        textAlign: "center",
        alignItems: "center",
        textDecoration: "none",
        margin: "310px",
        paddingTop: "45px",
      }}
      href="https://www.udemy.com/course/the-modern-angular-bootcamp/"
    >
      <button style={{ padding: "10px" }}>The Udemy Course Link</button>
    </a>
  </div>
);

export const Scss = () => (

  <div style={{}}>
    <iframe
      width="800"
      height="450"
      src="https://www.youtube.com/embed/nu5mdN2JIwM?si=_Gs7WkEDhuMByaCo/"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <a
      style={{
        textAlign: "left",
        alignItems: "left",
        textDecoration: "none",
        marginLeft: "-15px",
        padding: "15px",
      }}
      href="https://www.youtube.com/embed/nu5mdN2JIwM?si=_Gs7WkEDhuMByaCo/"
    >
      <button style={{ padding: "10px" }}>The Course Link</button>
    </a>
  </div>
);
export const AngularCrashCourse = () => (

  <div style={{}}>
    <iframe
      marginTop = "25px"
      width="800"
      height="450"
      src="https://www.youtube.com/embed/WHv1YQUg6ow?si=GWUiIV6RWWx-Xr9H/"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <a
      style={{
        textAlign: "left",
        alignItems: "left",
        textDecoration: "none",
        marginLeft: "-15px",
        padding: "15px",
      }}
      href="https://www.youtube.com/embed/WHv1YQUg6ow?si=GWUiIV6RWWx-Xr9H/"
    >
      <button style={{ padding: "10px" }}>The Course Link</button>
    </a>
  </div>
);
