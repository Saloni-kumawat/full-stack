// two ways of doing same thing 

//first way
//fn ko hi requestHandler name diya he first waya mein 
const asyncHandler = (requestHandler) => {
    return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
   }
}
    
export {asyncHandler}



         //second way
// const asyncHandler =(fn)=>  async(req,res,next)=>{
// try{
//     await fn(req,res,next)
// }catch(error){
// res.status(err.code ||500).json({
//     success:false,
//     message:err.message
// })
// }


// }






