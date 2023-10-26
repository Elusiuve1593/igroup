import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { Users, editRawThunk, fetchTableThunk } from '../../bll/table/operations'
import { BodyTable } from './body_table/BodyTable'
import { PaginationPage } from './pagination/Pagination'

export const UsersTable = () => {
  const users = useAppSelector<Users[]>(state => state.table.results)
  const dispatch = useAppDispatch()

  const [page, setPage] = useState(1)
  const [editableRowId, setEditableRowId] = useState<number | null>(null)

  const [formData, setFormData] = useState<Users>({
    id: 0,
    name: "",
    address: "",
    birthday_date: "",
    email: "",
    phone_number: "",
  })

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onChangeHandler = (id: number) => {
    if (editableRowId === id) {
      setEditableRowId(null)
    } else {
      setEditableRowId(id)
      const userToEdit = users.find((user) => user.id === id)
      if (userToEdit) {
        setFormData(userToEdit)
      }
    }
  }

  const onDoneHandler = () => {
    dispatch(editRawThunk(formData))
    setEditableRowId(null)
    setFormData({
      id: 0,
      name: "",
      address: "",
      birthday_date: "",
      email: "",
      phone_number: "",
    })
  }

  useEffect(() => {
    dispatch(fetchTableThunk(page))
  }, [page])

  return (
    <>
      <BodyTable
        users={users}
        editableRowId={editableRowId}
        formData={formData}
        changeInputHandler={changeInputHandler}
        onChangeHandler={onChangeHandler}
        onDoneHandler={onDoneHandler}
      />
      <PaginationPage page={page} setPage={setPage} />
    </>
  )
}
