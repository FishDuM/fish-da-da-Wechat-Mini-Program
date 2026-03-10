import { View } from '@tarojs/components'
import {AtButton, AtRadio} from "taro-ui";
import './index.scss'
import GlobalFooter from "../../component/GlobalFooter";
import questions from "../../data/questions.json";
import {useState} from "react";

// 做题页面
export default () =>{
  const question = questions[0];
  const questionOptions = question.options.map(option => {
    return { label: `${option.key}.${option.value}`, value: option.key };
  });
  // 当前题号
  const [current, setCurrent] = useState<number>(1);
  return (
    <View className='doQuestionPage'>
      <View className='at-article__h1 title'>
        {current}、{question.title}
      </View>
      <AtRadio className="question" options={questionOptions} />
      <AtButton className='controlBtn' circle>上一题</AtButton>
      <AtButton type='primary' className='controlBtn' circle>查看结果</AtButton>
      <AtButton type='primary' className='controlBtn' circle>下一题</AtButton>
      <GlobalFooter />
    </View>
  )
}
