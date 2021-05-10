class C2
{
    calculateDistance(x1,y1,x2,y2)
    {
      let  x=Math.pow(x1-x2,2)
       let y=Math.pow(y1-y2,2)
        return Math.sqrt(x+y)
        
    }
  async   F1(cordObject) 
    {
        
      let  source_x=cordObject.source.x
      let  source_y=cordObject.source.y
      let destination1_x = cordObject.destination_1.x
      let destination1_y = cordObject.destination_1.y
      let destination2_x = cordObject.destination_2.x
      let destination2_y = cordObject.destination_2y
      let   destination3_x = cordObject.destination_3.x
      let  destination3_y = cordObject.destination_3.y
      let  min_distance=this.calculateDistance(source_x,source_y,destination1_x,destination1_y)
   let     current_dis=this.calculateDistance(source_x,source_y,destination2_x,destination2_y)
        if(min_distance>current_dis)
        {
            min_distance=current_dis
        }
        current_dis=this.calculateDistance(source_x,source_y,destination3_x,destination3_y)
        if(min_distance>current_dis)
        {
            min_distance=current_dis
        }
        return new  Promise((resolve,reject)=>
        {            
        
            if(min_distance<50)
            {
                reject("The shortest path is not found")
            }
            else
            {
                resolve("The shortest path is "+min_distance)
            }
        })    
       
    }
}
class C1{
    cords={
        source: {x: 30, y: 20},
        destination_1: {x: 50, y: 30},
        destination_2: {x: 60, y: 40},
        destination_3: {x: 70, y: 50}
        }
        F1()
        {
            const c2 = new C2()
            c2.F1(this.cords).then((e)=>{console.log(e)}).catch((e)=>{
                console.error(e)
            })
        }
}
const c1 = new C1()
c1.F1()

