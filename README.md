To Do List App Build

## How I built this To Do List App with screenshots included.

Live version available here: [To Do List App](https://hellokristinafaye.github.io/toDoList/)

## Technologies Used:

* From this tutorial: [To Do List by GreatStack](https://youtu.be/G0jO8kUrg-I?si=OAoFkP_-wDNssnZ6)
* CSS Pseudo Classes and Hover
* Google Fonts (CDN and downloaded icons with custom CSS)
* Onclick (JavaScript)
* W3Schools for [enter keydown](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp) and commentary on [addEventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
* Local storage for persistent data

We’re jumping right in with CSS styling because I just love how this channel does it!  I do usually start coding by setting up my file structure, links, and testing those links.  So you can find more details on that in my previous post/the README on the [Digital Clock Build](https://www.hellokristinafaye.com/digital-clock-build/).

Back to the CSS - I really appreciate the techniques shown in these tutorials that produce really beautiful and slick websites with just vanilla CSS.  It’s really fun to comment out or alter CSS code just to see what effects each rule has on the final product.  In bootcamp they had us just make up our own styling, which, no shade to them, I understand the thought process behind it, but following tutorials like this is like following a recipe with new ingredients and techniques.  Even though I don’t fully understand them at first, after a few tries and playing around with it, I’m able to build a foundation of knowledge.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEdTfn6Cd4lQWGZnULDyIsgsGiugy9Sy_K_IY3NZQxA40pIljnvukBMyTpMuU07BsPKczaprQmQlxNkQsgGw24eUcC3Vp5_ituuYKNeGptOY3RG_T2GpTI0l_SymkNPl1CEWzNo_9xsoBnKMRypp7OFmY?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXczp-OWiL2KH3MvAmtcun_PFsG6UjXAC7NFI1Kggc202zVwxKzKzW18zRRKTilKo6Ao51cizLJM46eO7TlRxtSmjtZYP1AKqsytPd-8UfqpUasU1dD_UDr6UyPwgmgHlnNhUneyNPizt94tJYRVpxQliiNm?key=VF3Rlq9qSHCUqjdHL8twIQ)

In the tutorial they have a link to icons and images to download, which is great, but their assets are behind a registration wall (I would have to create an account with them, which I think is free, but it’s still another step I don’t have the bandwidth for currently).  Plus, I love any excuse to use Google Fonts and Materialize.  It’s such a great free library available, and it usually does cover any needs, especially since the icons are customizable.

I’m just testing the functionality here, and later on I end up having to download the check icon anyway instead of using span code snippet due to dynamically changing the display via JavaScript and CSS classes.

I am really stoked on the practice of importing assets from libraries and adding custom styling via CSS.  That’s what the next couple slides are showing.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPT10pwX4XdZTZJPlfz6E9VOoCIHSKBjX22HTufr-EmNsV8vnmtzpdkmAoNZ3YdcVq6eFazYRuNpqL_6zFIGjNNcYh3K03JduH58VYgejczeeQIh_LRZ6RSBsOyBOdNwqev_g1q8ymdKAQ5kX0E9gmu6Q?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4uklaEgxrydzqkzf_d2rQdn9vBw4nLIIv7aDuQvol13o2mpih5a7fpNdz_hx57iHURMIex7Iln4Hh9bgKuHNEp7TcpHGWfu8XbiLkSmD3XfWmqij6jrkBcf9Hts5f1Cn2vCseh13nEq4cDxY4xySTLc8?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2dexfUbDYa5vmraWAdVWtSIt2KThK_m2P0lx4elScGRTkXBVgMhopogC1krSX0m0KMRq4sTKDMwk-MygAmoFh1N4aQil96_66ABub8b31HpNxg3bHeBW5MCdsUHlq1nHOgyggMH4VuX5yeygrBL_s-chx?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeZAPkw_XxRbQ8IZvL3uTmGYGP5y9wzObaSmy9awtIeWa4s0wniorixU0dzyZ2Qk5cnZl6cazhojBO9_Ha_Rb3wloSDSB6SwevxxqshkUZL5EkVtWN-OekExKlGENdruNv6hgCLm_ya6I8BUqDenWTdqf1-?key=VF3Rlq9qSHCUqjdHL8twIQ)

The above is the end result of a bunch of debugging and experimentation where I wasn’t finding the icon size changing, even though the rule worked for the color.  I ended up adding the class “list” to the check icon, and altering the CSS rule syntax to include “material-icons”.  I didn’t just want to use the “material-icons” class for this because at the time I was planning on using other icons from Google Fonts, which would also share that same class.  Little did I know that I couldn’t use the span tags in the later use cases, so I could have just left this as “material-icons”.  Oh well, glad to have learned!

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYI58YJig8DdCJ7sGZ8itZHaVSfSg5DzzEX035vMqNRCXmkDu5FD_iPG7kaJLeqP2vphWF5GwBfGCNByRz8mQw6jzuop3xyp1Uz-ZdytAazVWLNQ3gUWCOfSgUnTL0r9_lEeaqQz77MxUBfZ-gu88gWiIE?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeY--u7OEVX_e6WOp_0fqEPEEY6CSVtv08ydU9I29SVszwWTRJUejCn1ozKv9yEiDKIkto32-LBpKFbVsj9EGmXtdaXtVARfs8bFnqDCEI_Db8Nw-bBtb0KU2DQgeZujr-tGSEecj6OoHsaSFVaT2KwStQi?key=VF3Rlq9qSHCUqjdHL8twIQ)

I searched Google Fonts for a list icon, and then styled it to better match the tutorial’s header.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHVbYOkaB1j4XyEPY4PXKR5gF3xa0zfIMHj8nrcDw4ZS3XFKkx084e5YFjZonsyq-dCatdQgcRQY4H-7_Lyj6eonZdBeBjGuXmwFQe_KJfYZwf-U8f0AgJgP0gTQw4Ro-NZx9OWVd5sEVyHNj7UoL5N9Kh?key=VF3Rlq9qSHCUqjdHL8twIQ)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcRBqKy1C6QnNm_IDC45DCDIyXh-OvbA2OL1vVO246afuOjxrZtYDM2PwIM9RFWLwHopcJpwuiADfOJ-7z0CKuJAAomBSLB7MlmCj6nocvfNCcmH-Jh2npmi5j8N1SisQaLwBjGj7B2jsU4QzmtT9ZgnjmB?key=VF3Rlq9qSHCUqjdHL8twIQ)

This is a great example of super simple vanilla CSS having an enormous impact on the visual quality and therefore user experience of the page. Just a few rules in CSS and the page goes from very basic Windows 98 to perfectly modern.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfkZhpyjcg_TJAnpmP7UYcOspSriPwMsEgU63CaK1AR1mfCnRtUZoLdRwmrypfRF_9_W-X0pehX2-Q5_qAk3eZdb7EZBaZ3C-O_Ji53j1lZtUzDDPwwwplARDJttv03FLMpPEBtRzV-bNFOAswXGcKlJe0?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdAIxy4moObbANleStbm5gb41L0CU7ux3x0K274--ppAZPyfg5k6txCG4FFOq5ADO1p18_MWZPD18PtX9cAKr_BjupfBX5dSfPAeeG0OrkUZI2uAexyipdX7R7nCmvvc8LBUcQTg6itf2x-c1KsAOrLr6e0?key=VF3Rlq9qSHCUqjdHL8twIQ)

Again, loving this super simple vanilla CSS and its huge impact on the quality and perceived value of the page.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPD8v8VHO0DutPRgfv37TZjDi3zJqq1uJFlhlAvARjjiqQEc1OUF0r7WJfMSAwgbS74aAFzIM0aOopPGEVrQlynXdqCkkvd9feOHACY3vo8ZNOLCqlAr9CHHRBCjfClyLP5IrKYq0tSr4Cz2VqEllP63Ep?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDyzaeybQFHPPhv8KbAwaQIDNE4X83SKY5HSWaXgg2RSzlcOy-o7MQ2ofNTBD_1oNC0EFnRlgvb4rE5DVIQQ_R7AiIOgf8o3IvJhevsW_w_j0CrGsdOaxt48lA98CW-Eq8-hlnFFY1zsNHiQx3tPY2X-M?key=VF3Rlq9qSHCUqjdHL8twIQ)

This is a great technique I’m noticing in a lot of tutorials from GreatStack and my other current favorite, Future Coders, where they add simple HTML elements to stand in for the soon to be dynamically added elements of JavaScript.  That way, we can get all or nearly all of the styling done before diving into the JavaScript.  Just a nice way to keep the work compartmentalized.  I don’t know if this is a best practice in the workplace, but I certainly appreciate it as a learner!

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXed4bdNGXK2oyl4Kl1d8mAr5xLdNxVi0ibV0jMlkSfxPkZ8PFtfR2_xrwb5vv8IhNZ_JuhTpnVEdoiVIVetkQEstDSkSSTu4trpzmeJSDa_VuzLfI-AUQVEp6KpzDy04kf3mBZAgb6XYS6fD1MeFYSNH-oL?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXficMyLk7uZghkhkqRyo0UHOT6m7bqCrxK3pqjqRgd6xLqX2AQS694f7-A5phdX12F3RofYxFFLEB16woMIwgFFf2pRRA_2uw78M53LrNqr5TEZDr_11CmIbVBzK_hQoGlPb2EFCPDIXxThOwQFMeXAOALl?key=VF3Rlq9qSHCUqjdHL8twIQ)

This is a spot where I tried using the code snippets from Google Fonts to show the empty circle at the left side of the list.  But then later in the tutorial found out that this image needs to be produced by the CSS in order for the JavaScript to successfully produce the image dynamically.  So even though I ended up with the same image using the CDN and code snippets, it’s not the same practically, and I had to delete a bunch of code and back out of that plan.  It was a fine learning experience!  Especially getting to just back out of it, and then redirecting by downloading the necessary icons from Google Fonts anyway.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcXH7BUWh2pEGQezr4qao0H_dZmS5ew2uclVF973jxKFw1iA3utn80X0FBk6pteZJFo-4f1XkoA7AZ6n-xt0TcJmh-04xhAIJoMvmGVARUuqhOyuhMW3fAFK4fkiYmw57LxH3Q6PRXw5CgAVV58G5XDOQ?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcSvFZes7Q_-SEyJzvBnGPwka_9-4uILRGIa61m6ag2iXdXUoWkmNIN29f3PnN0PAkZP9I78B0RPddB8gJuQOMT9_D-lxB_7oI-sar3tecx0sR3CU1rLID90wqjGY0LK1_1N0f4Pazzr80gHy2fdeFkc5Le?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf7Avm2ghGSbFsrFXQI5SDDuWZooDx_dOahHN0J3vS_83sFVCH8UjvLJxY4BFOeQc3bg9QZeMWPWj9Gky9Dgr2X59enSEpeuQ-XDktQeFMi5dNY8eoxWj6QSGV4GbvJOj4JU8pLgTJri-H7GmQl5AX6z5E?key=VF3Rlq9qSHCUqjdHL8twIQ)

Lol oops - back to pseudo elements in CSS.  Like, literally I had already scaled my snippets to the three Tasks before finding out how the CSS classes would be switched dynamically!  Anyway, it’s pretty cool to learn “text-decoration: line-through” for this effect.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfUs5v_ynbsdP3opxGKtQXiYhVxpGXFpy-jlMzxSOcdnFiKLKCU9CoDvlFvcJwHh7qgfE2T1Chlzcyufw04XDuQ-g5cikiLfBxoaiLuqnh65lT0Lcy5r90_TRn4T-DfszXLmyY1SKHoplQFfrdXOYbqGVo?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_6a8yDLgLHMNuRY5qikv5ezwP82FZ8pGZaU2i1LTu5JJBvvnOihy7DrIQilsraULiLhx5e4aDmanzED4-9P4PkWwkI71sSalKbmVN6YvBjEasO3BFLF18Hlffg3OtTpsQZzc6Nsj1H6VLZyyt5zYoP4wz?key=VF3Rlq9qSHCUqjdHL8twIQ)

Again, loving the practics with pseudo-classes, which is how the check and circle icons are actually displayed.  So the rules that start on lines 72 and 88 are what dictate how the icons show up in each list item.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcflNtfu9SvRxEuxqxHOEs-f_6nVxhC--uZyWnjNcZlpwcH4om665Ncq2o5LqkRXE9sauop-JoXYQoF_jw44cNuDVFX8nsUNnS0MsuwNtXZUlHt8nXnf4aCYgiXuVWB6KnuwU1QPNqLJAfbjQ6LPWVQgWpb?key=VF3Rlq9qSHCUqjdHL8twIQ)

Cleared placeholder HTML content to go on JS! Actually it’s just commented out.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXftD1R_wXiy3gSZipBnODdMaFB-MhpBnKykdWzgQec4M1Y94Avxo5ASYF5tTmwE4JBgNO0jTfXtSY8mxBsO-1otx5PdLxD9ee_QGiZj2OiQlz4DQ5WU1hV4d-DSArH9uQXOMhli7mZeCKjYQStuLTKQRhk?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_1KR7V_ZCppwdo6NSOBbhe3GzSu-Z2r5Sr0m59GhPhxGQLIxP0vQ4ABuwH4eatE_00_LN6kwwq-xfZ9F-b7zqJEx0C8Dhl4cgEdJ_MjXeE1zvAF4fhG11XjV2NU9jyukqW4qzswbGFP7sFqlyiJnlxH5M?key=VF3Rlq9qSHCUqjdHL8twIQ)

And here’s the actual finished code for addTask(), which is called in the HTML as an onclick.  I like how the first condition is the edge case.  In bootcamp my teacher emphasized that that’s the best practice, and it’s cool seeing that in other learning sources.  I’ve seen it a few times now in if-else statements out there, to the point that it kind of feels like the default use of the first condition.

I couldn’t quite find the commit for the older version, but the first test of this function’s, um, functionality(?) was before lines 14-19 were written.  So it was just to create the “li” element, and then append it to the listContainer.  Honestly at that point I did want to do a functionality check with like, a console.log but it didn’t work?? I’m not sure why not and at this point I think the code has gone too far for me to check it.  I mean, it works, but internally I want that validation before I move on to display code.  That’s a tough part about JavaScript because so much of it is invisible. Like, it’s designed to work behind the scenes so you have to actively create places to peek at the results.

Oh wait now I remember - there was a TYPO on line 11, now that I think about it. And that’s why it wasn’t displaying, prompting me to wish there was a console.log solution available.  And then I did a console.log, and that’s how I knew to dig a bit deeper into the code for an issue.

The word document was misspelled and VSC didn’t tell me!!! Shouldn’t it tell you?  Like, document is a keyword, I feel like VSC should have told me that it was misspelled.  LIke, GDOCs tells me when stuff is misspelled with a little red underline!  Maybe there’s a setting in VSC that I can turn on to tell me.  That would really help with debugging as it would automatically catch at least some typos.

Anyway, then we repeated the create/append process with a span so the list item includes a close button. But the following screenshots were tests of appending the “li” BEFORE we added the span, so it doesn’t show up until a few slides later.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4ScL1cOnF6_1z3U-rdRjrQTY2Pm599558z6gLw-60_EhNeuv7ohkpBUGk951h5RF7aiMhMRTNI4baRk4gqsbpGUKZ7GHQ_Di_wNXTFF7AS0Bn5u9oZiqpkibMHVZKYzB8GWfDk1-G81utAJbud0_769E?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFB-Uzlo9XNGcSLU6rjR9E3bgIOT_iuA-yEcPOoQN5hXsn7EC1LRqLH9gCtN5-6UxULAjNuK75U-VR6kYhgTL75HzZXYIKBMxbusI1ktyYt3yBnBP9ZHaeAdY7Qr1gA3P5FH6hq46F4YTQTElRs9wRY840?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeYa1JzygWH-iM9RYKg0fxPbj-G82uD-qfo_4V92S_6SdeW5od5SOXILw8T91jmIsQQDhEzHkNs9BQX9mH6v_zUs0gkuzC1vWC8t8RlSDaUpKBBh-g-AA9z9MSTwMfgPj5pb_3XellonsVv6Yjk292AqcQ4?key=VF3Rlq9qSHCUqjdHL8twIQ)

Haha, included this because that tiny adjustment did make a difference, at least in terms of matching the tutorial.  I’m sure what he did is the better practice so I want to follow his results to the best of my ability.  It’s just a little different because I was using the Google Font icon I downloaded instead of his.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXefKG6QnAdQTY91B6tgzaZb7XHqX9uxoJJEWkon-5y_gQ4D8cuG45a8_5rin8445o5DU8yc0P5JLLvsL8vEjTrhbkemBkzuviV9_-Tg35n1WIMBGxt8vnPbgIw4AMvTbW1_dPp0tlzTBgf8zcbOrAj5GPCU?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcqbDn7IkZMlY4cFWTG9CUJSl_Hv0bpMmNZcPUubzjo3TxdMsbKXpevKdZW77O1pXZr9WKYc8ssXyXofA2Co_JJDKebQJ28D8DxT2L_9Hh3f2NVWXJW40MR-Is3QCN2x65Mw9O-CxqrdQGEGyy25-uQaTeq?key=VF3Rlq9qSHCUqjdHL8twIQ)

It’s so cool that this one line (15) clears the input box.  Like, such a great move! It adds a necessary bit of functionality with just the one line. (omg I’m using the word “functionality” too much!  Will hopefully find a synonym soon lol).

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf7QZaht9kkJk6C4tWsk9kfzEwkbm9sz7UieoYsfnIvX6XmJm32YPmOJo5wXm8dtYQ-1Vns8GDJ9jetnMy9vFJtQzRdWB37druNZCKnBqCLKPSSHX-c0aO9CcyN6zhcP_MuLPUaWQ6lW_4kZzzE0EzTRYz6?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcIgalAzynuo9s-AZWp_ejBtJkgB8vgkZz5L3_HtKuifNsSmphM4ex5RZP8JG4RrRKZ-2vHTKQyEIWfA3L63zYYHoUKnO5alLaaBCUgr71-_kDWj_9iyVNxa1ygb_jml70vHnIBJDv-KjdiQPAebnz2y8yX?key=VF3Rlq9qSHCUqjdHL8twIQ)

And here we are finally adding the span for the close button!  I bet there are many ways to do this, but this is pretty cool to just include the createElement and appendChild in the function itself.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXezI8KKko0wIlh4RdM0ak5cHAjlqHSlkTdZUqxS25AV2VhVzFp2O-S6Q74YQtTrivKJhG9jLCqda0wIVrI_CnFB0l9XEUA4bEA2EuxFHTwlbJ-pagXI0w6w7AbEg3e21HPpMxfz2naLv9-xLPHx1FWIZZfS?key=VF3Rlq9qSHCUqjdHL8twIQ)

Shows hover

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdD59-rfYtP31o-6AlFS7JO3GaoJcgC63RYiOltg7qeSF_4R8hj88nQ4ksJe0-ymjPGWR3tRzzIrUxKiUUj5x9CPnTB5OP5oJFNxMGvqsbOZkMNqsAO8drBIGhRiibjL7dIEAywMcQJpIvq4-5kOMyuizmH?key=VF3Rlq9qSHCUqjdHL8twIQ)

Loving the use of pseudo-classes here for the hover.  Really opens up a huge swath of CSS functionality.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfN58BYuWA2m1W0i_JTWfX2SvWTt-snX8ker9aka84rPxkJBc5xKqjb18AaEYmTMcbp8XU0kV3MrDKAp36aNl7ZFMpCMKJbEsHayFpkox9XM82Gea20M8qMSg3q3gPYx5h5yj8RbyEUn0Dgle45jwFDVlZa?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc8C8A4aADgZJ3GD3ARN1vOeSDQqy_p5bhVJPfTTUq6X0OyTERHwSXXtoaWAB_DKFO9GHj3toquP4SikCYW8R9S7mlN-tPpQmBvxsN8GU3TCq8p6CbKvGuWhkQEgR9J2F1GjJorLkBuONsSS3fDGgE6nOcn?key=VF3Rlq9qSHCUqjdHL8twIQ)

And then our bestie border-radius: 50%; to make stuff circles! Again, I just want to admire how the simplest little code snippets create elements that are slick and really elevate the website look and feel.  It’s like how salt just brings dishes to life, or a squeeze of lemon juice.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeX0SYC1G75mr8A7KL62PUveTIDaz8OQ5TT2_qY0AIkSppD0tgD_Kz2NhgLevVW-bIKA1KZXhXjGyYSgKjGFeZQmfEnFYy6SOcq0OwNeYgD1H5VmvlNlWyjTrVBeoTqbRksbqYCgPDiJPydzRrhfKqKrXs3?key=VF3Rlq9qSHCUqjdHL8twIQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9EHpNMXLYCrkz-c4Hci5Ge5gbEdRcl4rOMvgYB38aSOploVb0CZgcpqTFtsfvVuXkYhCKVYKhkY80qUoRbBnhJ2IgGMbd-gArSK-WJAICyUhB-w3TGYsLT3oMCyxlWUCYozIh77DjXlrmN7Ev7qN2G3A?key=VF3Rlq9qSHCUqjdHL8twIQ)

Ok this one is actually REALLY cool.  This function controls what happens when you click in certain spots.  Like, THIS is how it knows what to do AND what spots on the page are significant.  Let’s maybe really internalize this connection, b/c this feels significant.

Well, this plus all the tag names, the classes and rules in CSS. This is like, the switch. The HTML and CSS are like, the hardware, and this is like the on-off or some other ruling body. And it’s conditional statement.  Like, this is a use-case for if/else statements!

The .toggle() method is pretty cool too! It just turns that class on or off (adds it to the class list of the LI element.  So cool!

So the HTML tags are how javascript can select things to manipulate.  Change dynamically.  This is why its so cool.

And I think CSS is why it looks cool, or how it can look cool.  Like, if there was no CSS, those effects wouldn’t exist.  WTF in bootcamp they were like, minimizing its importance.  I guess??  But they could have explained the role CSS plays even when you’re mainly using JavaScript.  Like no, you really need your HTML and CSS game strong when coding for the best in JavaScript.

And about 25-27:

That’s how it selects the span tag that’s the close button!  Yeah I think this is the close button code, like boilerplate.  It’s so cool, what a beautiful phrase.  I guess in this case that’s the edge case, but I do think it would be best at the end. Maybe this is a good code template for all button functions?  How does it fit in that?  OH yeah I guess I know how to use buttons to link to other pages, but for the ones that DO something on the page like change the day/night mode or calculate something, JavaScript like this is what’s gonna do it.

About .addEventListenter():

Very cool method, I bet we’ll spend a lot of time with this one.  So from [W3Schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) the syntax is:

* element.addEventListener(event, function, useCapture);
* The first parameter is the type of the event (like "click" or "mousedown" or any other [HTML DOM Event](https://www.w3schools.com/jsref/dom_obj_event.asp).)
* The second parameter is the function we want to call when the event occurs.
* The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEZK2lmXLelWTY_bGqm1JPOMz_wdIajjOoGMt4Deufk4mTswOq02mOSiWp5DruUW0Dl20XuHvqYDdSjB-aQJYX-J2FOU9tG9X3BJ4moCaJMCq0ZJGCr-NLEtOEJbu24mSsaffry9nKCl2AP-OUq71scWjJ?key=VF3Rlq9qSHCUqjdHL8twIQ)

Ok this bit is exactly what I was talking about when the value of JavaScript being hard to see.  The function at this point works, but doesn’t display anything in the browser.  This is where you would use a console.log to check the result.  But in this case you would need to walk the dom to access the local storage.  I’m not sure if that’s how you say it, but I mean when you go to local storage and get the data.  Lol, which, I think I was imagining something else, but then got to the next bit in the tutorial lol.

Calling saveData at the required spots in the function was pretty cool.  Like, this is when you wanna add one to refresh localStorage and the display.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXem8kIpR9MqCi8dEarjtLU-oImt63CV2LJv6EdLS98NtDiVieYWMiUvQd55KAGd-oLQt6pBp9-YiB8Txd1pDRYexE9H7tU6a7YVanNE5xmBrrbsEnR53nk-gjnKLIEtaZG2shw7ar-LvGjr8IE9qm-pw7_x?key=VF3Rlq9qSHCUqjdHL8twIQ)

As noted, it’s hard to display the power of this code in stills, like there would be SO many screenshots.  So I’m just gonna re-link the live [To Do List App](https://hellokristinafaye.github.io/toDoList/) here and suggest you try it!

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf7a6DgARpvOjjOHN4dSiwhCBMWraXA0HBy7un67n8OwyDNH2CcH7pIC9jtC5-Lkm7FHj3I-lkxLeMqYuEGO5p-qUG5QmJKQEvCTbukeS0yF79mXUd32HXtbBpf-FX4qb3G97MtJ1aJHggwH_VvuoRDARij?key=VF3Rlq9qSHCUqjdHL8twIQ)

For my Keyboard Warriors!  Had to make the return key work for submitting an entry. Literally I appreciate this code so much!  I’m sure there’s a way to make this the default, and I would love to commit it to memory, but also just noting that it exists as boilerplate is pretty cool.  I had to update the class on the input box so it matched this code.  Which is directly from W3Schools, including the comments.  I really like comments like this - I just read on Javascript.info that these aren’t good, maybe they mean in a workplace, but I personally really like these.  I guess because good devs won’t need the translation, they can just read the code itself, but hey I’m a beginner.  Anyway I grabbed this from w3schools which is one of my favorite resources in tandem with Javascript.info.  These are like my go to sites when I have a question.  I’m just reading through JavaScript.info as part of my learning journey too!

Future Dev:

* Draggability
* Updating list icon to something cuter
* Basically rebuilding Google Keep
  * So the tab/grouping function.
  * Access from multiple devices

**
