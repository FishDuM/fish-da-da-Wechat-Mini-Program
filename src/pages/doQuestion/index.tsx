import { View } from '@tarojs/components'
import {AtButton, AtRadio} from "taro-ui";
import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import './index.scss'
import GlobalFooter from "../../component/GlobalFooter";
import questions from "../../data/questions.json";

/**
 * 答题页面
 */
export default () =>{
  // 当前题号
  const [current, setCurrent] = useState<number>(1);
  // 当前题目状态
  const [question, setQuestion] = useState<any>(questions[0]);

  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();

  // 答案列表
  const [answerList] = useState<string[]>([]);

  const questionOptions = question.options.map(option => {
    return { label: `${option.key}.${option.value}`, value: option.key };
  });

  useEffect(() => {
    setQuestion(questions[ current - 1 ])
    setCurrentAnswer(answerList[ current - 1]);
  }, [current])

  return (
    <View className='doQuestionPage'>
      <View className='at-article__h1 title'>
        {current}、{question.title}
      </View>
      {current}
      {JSON.stringify(answerList)}
      <AtRadio className="question" options={questionOptions} value={currentAnswer} onClick={(value) => {  answerList[current - 1] = value; setCurrentAnswer(answerList[ current - 1]); }} />
      { current !==1 &&  (<AtButton className='controlBtn' circle onClick={() => { setCurrent(current - 1)}}>上一题</AtButton>)}
      { current === questions.length && (<AtButton type='primary' className='controlBtn' circle onClick={() => {
        Taro.setStorageSync('answerList',answerList)
        Taro.navigateTo({
          url: '/pages/result/index',
        })
      }}
      >查看结果</AtButton>)}
      { current < questions.length &&( <AtButton type='primary' className='controlBtn' disabled={!currentAnswer} circle onClick={() => {setCurrent( current + 1)}}>下一题</AtButton>)}
      <GlobalFooter />
    </View>
  )
}
