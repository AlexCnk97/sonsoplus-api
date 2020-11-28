import app from './app'



async function main(){
    await app.listen(process.env.PORT || 3000);
}

main();