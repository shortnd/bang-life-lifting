import create from 'zustand'
type IUser = {
  uid: string
  name: string
  role: string
}
type UserState = {
  user: IUser | null,
  login: (by: any) => void
}

const useUser = create<UserState>(set => ({
  user: null,
  login: (by) => set(state => ({ user: { uid: 'id', name: 'Collin', role: 'ADMIN' } }))
}))

export default useUser
