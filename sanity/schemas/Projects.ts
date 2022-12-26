export default {
    name : "project",
    title : "Porject",
    type : "document",
    fields: [
        {
            name : "title",
            title : "Title",
            description : "Title of the project",
            type : "string"
        },
        {
            name : "image",
            title : "Image",
            type : "image",
            option: {
                hotspot : true
            }
        },
        {
            name : "summary",
            title : "Summary",
            type : "text"
        },
        {
            name : "technologies",
            title : "Technologies",
            type : "array",
            of : [
                {
                    type : "reference",
                    to  : {
                        type : "skills"
                    }
                }
            ]
        },
        {
            name : "linkTooBuild",
            title : "LinkToBuild",
            type : "url"
        }
    ]
}