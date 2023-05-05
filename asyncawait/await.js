const blogs =[{title: 'BLOG1'},{title: 'BLOG2'}];


const create3rdBlog = async () => {
    const blog1 = new Promise( (resolve, reject) => {
    
            blogs.push({title: "BLOG3"})
            resolve();

    }) 
    let title1
    try {
        title1 = await blog1;
    } catch(e){
        title1 = 'error';
    }
    return title1;
}
create3rdBlog();



const deleteBlog = async () => {
    const dele = new Promise( (resolve, reject) => {
             setTimeout( () => {
            if(blogs.length > 0){
                 let element = blogs.pop();
                resolve(element.title);
            }else{
                reject("Error")
            } 

        }, 1000)
    }) 
    let title
    try {
        title = await dele;
    } catch(e){
        title = 'error';
    }
    return title;
}

deleteBlog().then((m) => console.log(` shows ${m}`));