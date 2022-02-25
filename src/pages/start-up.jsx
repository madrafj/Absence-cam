import { AppTitle, BufferText } from '../components/ui-base/typo'
import { View, Content } from '../components/ui-layout/'
import { Spinner } from '../components/ui-base'

const StartUp = () =>
  <View>
    <AppTitle>
      <h2>Absense CAM</h2>
      <h2>Demo Vers 1.0</h2>
    </AppTitle>
    <Content>
      <Spinner />
    </Content>
    <BufferText>
      <h3>LOADING ...</h3>
    </BufferText>
  </View>

export default StartUp