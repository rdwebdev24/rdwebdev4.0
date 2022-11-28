import userData from './main.mjs'
import skills from './skills.mjs'
import project from './projects.mjs'
import contact from './contact.mjs'

let btn = document.querySelectorAll('.btn')
let wrapper = document.querySelectorAll('.wrapper')

btn.forEach((item,idx) => {
     item.addEventListener('click',()=>{
          switch (idx) {
               case 0:
                    wrapper[idx].style.cssText = `transform:translateY(0)`
                    wrapper[idx+1].style.cssText = `transform:translateY(-100%)`
                    wrapper[idx+2].style.cssText = `transform:translateY(100%)`
                    wrapper[idx+3].style.cssText = `transform:translateY(-100%)`
                    break;
               case 1:
                    wrapper[idx-1].style.transform = 'translateY(100%)'
                    wrapper[idx].style.transform = 'translateY(0)'
                    wrapper[idx+1].style.transform = 'translateY(100%)'
                    wrapper[idx+2].style.transform = 'translateY(-100%)'
                    break;
               case 2:
                    wrapper[idx-1].style.transform = 'translateY(-100%)'
                    wrapper[idx-2].style.transform = 'translateY(100%)'
                    wrapper[idx+1].style.transform = 'translateY(-100%)'
                    wrapper[idx].style.transform = 'translateY(0)'
                    break;
               case 3:
                    wrapper[idx].style.transform = 'translateY(0)'
                    wrapper[idx-3].style.transform = 'translateY(100%)'
                    wrapper[idx-2].style.transform = 'translateY(-100%)'
                    wrapper[idx-1].style.transform = 'translateY(100%)'
                    break;
               default:
                    break;
          }
     })
});


const name = userData[0].name
const img = userData[0].img
const profession = userData[0].profession
wrapper[0].innerHTML = `
<div class="info">
<h2>HELLO</h2>
<h3>${name}</h3>
<h1>${profession}</h1>
</div>
<div class="image">
<img src=${img} alt="">
</div>`

const skill_name = skills[0].name;
const skill_icon = skills[0].icon;
let skil_html='';
skills.map(item=>{
     skil_html+=`
     <div class="skill_card">
          <div class="skill_img">
               <img src=${skill_icon} alt="error">
          </div>
          <p>${skill_name}</p>
     </div>
    `
})
wrapper[1].innerHTML = `
<h1>MY SKILLS</h1>
<div class="skill_wrapper">
${skil_html}     
</div>`


let project_html='';
project.map((item,index)=>{
     project_html+=`
     <div class="project_card">
          <div class="project_img">
               <img src=${item.img} alt="">
          </div>
          <div class="project_info">
               <p>${item.name}</p>
               <p>${item.tech_used}</p>
               <p>${item.detail}</p>
          </div>
     </div>
    `
})
wrapper[2].innerHTML = `
<div class="projects_wrapper">
     ${project_html}
</div>
`

let contact_html='';
contact.map((item,index)=>{
     contact_html+=`
     <div class="contact_card">
     ${item.icon}
     <p>${item.name}</p>
     <a href=${item.link}>visit</a>
     </div>
    `
})
wrapper[3].innerHTML = `
<div class="contact_wrapper">
${contact_html}
</div>
`

