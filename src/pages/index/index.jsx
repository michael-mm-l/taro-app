// eslint-disable-next-line no-unused-vars
import React,{ Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/flex.scss";
import { styled } from "linaria/react"

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='at-row'>
        <View className='at-col at-col-9'>
          <StoreName>this is title</StoreName>
        </View>
        <View className='at-col at-col-3'>
          <AtButton type='primary' size='normal' circle={true}>按钮文案</AtButton>
        </View>
      </View>
    )
  }
}

const StoreName = styled(View)`
  color:#000000;
  background-color:rebeccapurple;
`



