export default function serviceWorker(){
    let swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;
    navigator.serviceWorker.register(swUrl).then(
        (res)=>{
            console.warn("calling from dev service worker",res);
        }
    )
}