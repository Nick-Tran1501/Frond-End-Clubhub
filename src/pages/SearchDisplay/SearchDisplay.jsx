import { Button, Typography, Row, Col } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ResultCard from './components/ResultCard'
import './SearchDisplay.scss'
const SearchDisplay = () => {
    const { state } = useLocation()
    console.log(state)
    const navigate = useNavigate()
    const onClickBackHome = () => {
        navigate("/home")
    }

    if (!state.length) {
        return (
            <div className='searchresult_container'>
                <Typography.Title className='empty_result_container'>No result found</Typography.Title>
                <Button type='primary' block className='home_button' onClick={() => onClickBackHome()}>Back to HomePage</Button>
            </div>
        )
    }
    return (
        <div className='searchresult_container'>
            <div className='result_header'>

                <Typography.Title>Search Results</Typography.Title>
                <Button
                    className='home_button'
                    style={{ width: "fit-content" }}
                    type='primary'
                    onClick={() => onClickBackHome()}
                >
                    Back to HomePage
                </Button>
            </div>
            <Typography.Title level={3}>Found {state.length} matched results</Typography.Title>
            <div className='result-card-wrapper'>
                {state.map(club =>


                    <ResultCard data={club} />

                )}

            </div>

        </div>
    )
}

export default SearchDisplay