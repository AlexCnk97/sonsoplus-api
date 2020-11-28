import {Router} from 'express'

const router = Router()

const entretenimiento = [
    "https://img.europapress.es/fotoweb/fotonoticia_20200507140128_1024.jpg",
    "https://s3-sa-east-1.amazonaws.com/tvquality-epg/HISTORY/Forged+in+Fire/ForgedInFire.jpg?crop=resizeScaleAndCrop&size=THUMB",
    "https://www.nauticalnewstoday.com/wp-content/uploads/2018/03/Screeny-Shot-13-mar-2018-12.30.37-1.png",
    "https://img.europapress.es/fotoweb/fotonoticia_20200507140128_1024.jpg",
    "https://s3-sa-east-1.amazonaws.com/tvquality-epg/HISTORY/Forged+in+Fire/ForgedInFire.jpg?crop=resizeScaleAndCrop&size=THUMB",
    "https://www.nauticalnewstoday.com/wp-content/uploads/2018/03/Screeny-Shot-13-mar-2018-12.30.37-1.png",
]

router.get('/', (req,res)=>{
    res.render('index',{
        entretenimiento: entretenimiento 
    })
})

export default router;