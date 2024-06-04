import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startListCategory } from '../../actions/categoryAction'

const CategoryItem = (props) => {
    const dispatch = useDispatch()

    const category = useSelector((state) => {
        return state.category
    })

    useEffect(() => {
        dispatch(startListCategory())
    }, [dispatch])

    return (
        <div>
            <h2>Category List</h2>
            <ul>
            {
                category.map((ele) => {
                    return <li key={ele._id}>{ele.name}</li>
                })
            }
            </ul>
        </div>
    )
}

export default CategoryItem