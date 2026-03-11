import { View, Image } from '@tarojs/components'
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import './index.scss'
import image from "../../image/image.png"
import GlobalFooter from "../../component/GlobalFooter";
import question_result from "../../data/question_result.json"
import question from "../../data/questions.json"
import {getBestQuestionResult} from "../../utils/bizUtils"

/**
 * 结果页面
 */
export default () =>{
  // 获取作答数据
  const answerList = Taro.getStorageSync('answerList');
  if (answerList.length < 1 || !answerList){
    Taro.showToast({
      title: '请先完成测试',
      icon: 'error',
      duration: 3000
    })
  }

  // 获取结果
  const result = getBestQuestionResult(answerList, question, question_result);

  return (
    <View className='resultPage'>
      <View className='at-article__h1 title'>
        {result.resultName}
      </View>
      <View className='at-article__h2 subTitle'>
        {result.resultDesc}
      </View>
      <AtButton type='primary' className='enterBtn' onClick={() => {
        Taro.reLaunch({
          url: '/pages/index/index',
        })
      }} circle
      >返回首页</AtButton>
      <Image src={image} className='headerBg' />
      <GlobalFooter />
    </View>
  )
}
