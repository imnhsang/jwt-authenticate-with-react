import { Profile } from '../actionTypes'

const failRequestProfile = () => ({
  type: Profile.FAIL_REQUEST_AUTH
})

const requestGetProfile = () => ({
  type: Profile.REQUEST_GET_PROFILE
})

const getProfile = () => ({
  type: Profile.GET_PROFILE
})

export default {
  failRequestProfile,

  requestGetProfile,
  getProfile,
}