import { WhiteLink } from "../components/ui-base"
import { Content, View } from "../components/ui-layout"
import { AppBar } from "../components/ui-utils"

const About = () =>
  <View>
    <AppBar title="About" />
    <Content block sticky>
      <p>
        Aplikasi absensi dengan teknologi Face Recognition
      </p>
      <h4>PENTING !!</h4>
      <p>
        Aplikasi ini adalah versi Demo dengan fitur terbatas.
      </p>
      <ul>
        <li>
          Database yang digunakan: localStorage (limit terbatas 2-5 MB)
        </li>
        <li>
          Hanya mendukung Single User
        </li>
      </ul>
      <p>
        Untuk pengembangan aplikasi versi Khusus (Dedicated) dengan fitur
      </p>
      <ul>
        <li>
          Database yang digunakan: Firebase Database (limit 1GB)
        </li>
        <li>
          Mendukung Multi User dengan fitur Login
        </li>
        <li>
          Fungsi Tambahan (jika memungkinkan)
        </li>
      </ul>
      <p>
        silahkan hubungi <WhiteLink href="mailto:mad.rafj@gmail.com">mad.rafj@gmail.com</WhiteLink>
      </p>
    </Content>
  </View>

export default About