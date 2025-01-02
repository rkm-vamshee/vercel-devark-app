

const SubMenuImages = () => {
  return (
        <>{
                [1,2,3,4].map((s)=><div key={s} className="group w-full rounded-md overflow-hidden cursor-pointer"><img src="/src/assets/sample-thumbnail.jpg" alt=""  className="group:hover:border-2"/></div>)
            }
            </>
  )
}

export default SubMenuImages