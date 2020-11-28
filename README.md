# [heaplinker.com](https://heaplinker.com/)

[Heaplinker](https://heaplinker.com/) is a platform that spreads multilingual digital writings with the motto of "think and make". It has been made in a very similar way to [Medium](https://medium.com/). Just as [Medium](https://medium.com/) is an open platform of writings on many subjects, here [Heaplinker](https://heaplinker.com/) is also a platform where contains a variety of topics, especially technical ones for digital publishing. Special emphasis will be given on technical issues here. Its main purpose is to spread ideas, information, and deepen understanding of technical knowledge, and to publish posts in both English and Bengali language. For now, all posts here are in English. 
Currently, only the owner of the site, i.e. the admin, has the access to the dashboard page where the admin can add posts. The post is given through the dashboard, it's called "content management system" or CMS. Other users are not allowed to access this page, they can only access the blog posts. Since the CMS is a huge development issue, so only the admin can add posts for now. But later other users will also be able to add posts in both English and Bengali language when the CMS will be more developed. The dashboard page is designed in such a way that the admin can add a post without any programming knowledge. There is a template on the dashboard page, if one wants to add a new post,  he will just have to fill it with texts and images in that template. According to the default design of the site, the post will automatically be added perfectly. It has been created this way for the time being as the CMS is not advanced yet. If one enters the dashboard for the first time without logging in, it will show the default view of [Heaplinker](https://heaplinker.com/). Once the user has logged in, it will show the user's picture and details. The next time someone login, he will have to enter the email and password, then another page will be shown where the user can add a post. The dashboard page is not responsive yet, but the index page and post pages are entirely made responsive. There are both desktop view and mobile view for the index and post pages. On the mobile view, there is an option "menu" where different pages and language option buttons can be selected. On the other hand, on the desktop view, the language option button is at the top of the page, and other options are at the right sidebar. The sidebar is made sticky by scrolling down depending on the height of the screen.There are created many postcards on the index page that have a hover effect through scaling and shadow. In the main navigation bar, there appears the cover caption of the posts as a carousel.The post page shows heading, sub-heading, cover photo, article, and other details about that post. On the post page, there are options for response and clap that will be shown stickied at the left side of the screen. It will be disappeared by scrolling down when the footer will appear. 
There is an option called "Translation of" on the dashboard page, that will contain the reference id of the previous post which will be translated at that time. 

#### Objectives

- [Heaplinker](https://heaplinker.com/) is a platform where contains a variety of topics, especially technical ones for digital publishing.
- It will give the opportunity to the admin to add posts.
- For adding post it will give a mini **CMS** panel to the admin.
- It will contain multilingual post with **Bangla** and **English**.
- Readers can clap on a post and give opinions through responses.

#### Technical Challenges

- Make fully functional website with **typescript**(*frontend* and *backend*).
- Create a backend **MVC** with typescript.
- Use minimal number of React(here it is used to render **.tsx** though it can be handled by custom **Component()**, but for efficiency its being used).
- Use server side rendering.
- Use **webpack** both in frontend and backend.
- Try to produce production base code.
- Use **mongodb** as **NoSQL** database. 
- Design entire site with basic **.tsx**, **.scss** without using any frontend framework like angular, bootstrap etc.
- Make a dashboard to add post.
- Design a responsive site for both mobile and desktop users with **Grid** and **Flexbox**.
- Maintain translation functionality for posts.
- **Sticky** functionality main-nav, side-footer and post-page's post-details(show on left after scrolling down).

#### Disadvantages

- Dashboard should contain more functionality.
- There are some design issue with the post card.
- Browser back button rendering page issue.

#### Installation and Run

  - To **install** run:

    ```
    npm install
    ```

  - to run **webpack development server**

    ```
    npm run dev-server
    ```

  - to build in **webpack development mode** run:

    ```
    npm run dev
    ```

  - to build in **webpack production mode** run:
    ```
    npm run build
    ```

#### Screenshots

![photo no 1](https://drive.google.com/uc?export=view&id=1wdMnHg3541lTFhJxtrk1y-E-mg1L3GM6)
![photo no 2](https://drive.google.com/uc?export=view&id=155XyNyMDU6TW0d7csYuhMnld_k4kbkPU)
![photo no 3](https://drive.google.com/uc?export=view&id=1ZAwrQrHIuUgUMllMScukGBbinFOYQ-ny)
![photo no 4](https://drive.google.com/uc?export=view&id=1C6Akt8W0_xqWffXP4R0b4-KZmpoltZ1Y)
![photo no 5](https://drive.google.com/uc?export=view&id=1tyvSzB3XAIrMby6RwGIaylrWCM9wF3tX)
![photo no 6](https://drive.google.com/uc?export=view&id=1nRYv2WfKoBH8EP9xWbXX-A3LC14E8JUU)
![photo no 7](https://drive.google.com/uc?export=view&id=1HQtzXYZPub-nbZZtdhfy8NENCdbkGC6s)
![photo no 8](https://drive.google.com/uc?export=view&id=1A7g6poyr8ax3ov1h3OiuBBqZL9eMjtnA)
![photo no 9](https://drive.google.com/uc?export=view&id=19OpoM9ZTacxhDr69cDaEhdp5O7oQ_yJx)
![photo no 10](https://drive.google.com/uc?export=view&id=1mEPrzeEOYbmZ577Pb0wuQ7KWdh6HHeSj)