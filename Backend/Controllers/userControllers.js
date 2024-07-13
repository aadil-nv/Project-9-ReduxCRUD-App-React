



//todo---------------------------------------------------------------------------------

const test = async (req,res)=>{
    try {
        res.json({message :"welcome to ooty nive to mmet you"})
        
    } catch (error) {
        console.log(error.message);
    }
};



//todo---------------------------------------------------------------------------------

module.exports={
    test
}