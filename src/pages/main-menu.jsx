import { MenuButton, Spacer } from '../components/ui-base'
import { IcRoundPersonAddAlt1, IcTwotoneAddAPhoto, IcTwotoneInfo, IcTwotoneTableChart } from '../components/ui-base/icons'
import { MenuTitle } from '../components/ui-base/typo'
import { View } from '../components/ui-layout'

const MainMenu = () =>
  <View menu >
    <MenuTitle>Main Menu</MenuTitle>
    <MenuButton href="/face-ref">
      Face References
      <IcRoundPersonAddAlt1 />
    </MenuButton>
    <MenuButton href="/face-recog">
      <IcTwotoneAddAPhoto />
      Face Recognition
    </MenuButton>
    <MenuButton href="/attnd-data">
      Attendances Data
      <IcTwotoneTableChart />
    </MenuButton>
    <Spacer w={1.5} />
    <MenuButton href="/about">
      About
      <IcTwotoneInfo />
    </MenuButton>
    <img src="logo192.png" alt="logo" />
  </View>

export default MainMenu