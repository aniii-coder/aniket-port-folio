const { Home, User, FileText, Database, Mail, Image, Wrench } = require("lucide-react");

export const navUtils = [
    {id: 0, name: "Home", icon: Home,  link: '#home'},
    {id: 1, name: "About", icon: User , link: '#about'},
    {id: 2, name: "Skills", icon: Wrench , link: '#skills'},
    
    {id: 3, name: "Resume", icon: FileText , link: '#resume'},
    // {id: 4, name: "Projects", icon: Image , link: '#projects'},
    // {id: 5, name: "Services", icon: Database , link: '#services'},
    // {id: 6, name: "Contact", icon: Mail , link: '#contact'},
]