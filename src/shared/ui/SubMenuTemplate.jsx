import SubMenuImages from "./SubMenuImages"
import SubMenuShapes from "./SubMenuShapes"


const SubMenuTemplate = ({state}) => {

        if(state=="Design"){
                return <SubMenuImages/>
        }
        else if(state=="Shapes"){
                return <SubMenuShapes/>
        }
        else if(state=="Text"){
                return <SubMenuShapes/>
        }
        else if(state=="Project"){
                return <SubMenuShapes/>
        }
        else if(state=="Images"){
                return <SubMenuImages/>
        }
        else if(state=="Background"){
                return <SubMenuShapes/>
        }
  return (
   <h1>Test</h1>
  )
}

export default SubMenuTemplate