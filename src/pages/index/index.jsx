// eslint-disable-next-line no-unused-vars
import React,{ Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/flex.scss";

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
          this is title
        </View>
        <View className='at-col at-col-3'>
          <AtButton type='primary' size='normal' circle>按钮文案</AtButton>
        </View>
      </View>
    )
  }
}




