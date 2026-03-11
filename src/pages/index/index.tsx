import { View, Image } from '@tarojs/components'
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import './index.scss'
import image from "../../image/image.png"
import GlobalFooter from "../../component/GlobalFooter";

/**
 * 主页
 */
export default () =>{
  return (
    <View className='indexPage'>
      <View className='at-article__h1 title'>
        MBTI性格测试
      </View>
      <View className='at-article__h2 subTitle'>
        只需要2分钟就能测出你的性格
      </View>
      <AtButton type='primary' className='enterBtn' onClick={() => {
        Taro.navigateTo({
          url: '/pages/doQuestion/index',
        })
      }} circle
      >开始测试</AtButton>
      <Image src={image} className='headerBg' />
      <GlobalFooter />
    </View>
  )
}
