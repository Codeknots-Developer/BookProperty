import React from 'react'
import './search.css'
import { InputLabel, FormControl, NativeSelect, Box } from '@mui/material'
export default function SearchBox() {
    return (
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <div className='main-search-container'>
                <div>
                    <div className='search-tabs-buy'>
                        <button className='btn btn-block text-white'>Buy</button>
                    </div>
                </div>
                <div>
                    <div className='search-tabs-rent'>
                        <button className='btn btn-block text-white'>Rent</button>
                    </div>
                </div>
                <div className='searchContainer p-4'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='search-input-box p-3'>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" color="success" htmlFor="uncontrolled-native" sx={{ color: "#3AB44E" }}>
                                        Property Type
                                    </InputLabel>
                                    <NativeSelect
                                        color="success"
                                        defaultValue={30}
                                        inputProps={{
                                            name: 'propertyType',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={10}>Commercial</option>

                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='search-input-box p-3'>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" color="success" htmlFor="uncontrolled-native" sx={{ color: "#3AB44E" }}>
                                        City
                                    </InputLabel>
                                    <NativeSelect
                                        color="success"
                                        defaultValue={30}
                                        inputProps={{
                                            name: 'city',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={10}>Islamabad</option>

                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='search-input-box p-3'>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" color="success" htmlFor="uncontrolled-native" sx={{ color: "#3AB44E" }}>
                                        Locations
                                    </InputLabel>
                                    <NativeSelect
                                        color="success"
                                        defaultValue={30}
                                        inputProps={{
                                            name: 'location',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={10}>PWD Housing Scheme Islamabad</option>

                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-3'>
                            <div className='search-input-box p-3'>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" color="success" htmlFor="uncontrolled-native" sx={{ color: "#3AB44E" }}>
                                        Price
                                    </InputLabel>
                                    <div className='d-flex mt-3'>
                                        <NativeSelect
                                            sx={{ width: "50%" }}
                                            color="success"
                                            defaultValue={30}
                                            inputProps={{
                                                name: 'min',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Min</option>
                                            <option value={10}>10k</option>
                                            <option value={10}>30k</option>
                                            <option value={10}>50k</option>

                                        </NativeSelect>
                                        <NativeSelect
                                            sx={{ width: "50%" }}
                                            color="success"
                                            defaultValue={30}
                                            inputProps={{
                                                name: 'max',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Max</option>
                                            <option value={10}>20k</option>
                                            <option value={10}>40k</option>
                                            <option value={10}>60k</option>

                                        </NativeSelect>
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='search-input-box p-3'>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" color="success" htmlFor="uncontrolled-native" sx={{ color: "#3AB44E" }}>
                                        Area (Marla) {" "}<strong className="text-dark"><u>Change</u></strong>
                                    </InputLabel>
                                    <div className='d-flex mt-3'>
                                        <NativeSelect
                                            sx={{ width: "50%" }}
                                            color="success"
                                            defaultValue={30}
                                            inputProps={{
                                                name: 'areaMin',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Min</option>
                                            <option value={10}>10k</option>
                                            <option value={10}>30k</option>
                                            <option value={10}>50k</option>

                                        </NativeSelect>
                                        <NativeSelect
                                            sx={{ width: "50%" }}
                                            color="success"
                                            defaultValue={30}
                                            inputProps={{
                                                name: 'areaMax',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Max</option>
                                            <option value={10}>20k</option>
                                            <option value={10}>40k</option>
                                            <option value={10}>60k</option>

                                        </NativeSelect>
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='search-input-box p-3'>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" color="success" htmlFor="uncontrolled-native" sx={{ color: "#3AB44E" }}>
                                        Beds
                                    </InputLabel>
                                    <NativeSelect
                                        color="success"
                                        defaultValue={30}
                                        inputProps={{
                                            name: 'city',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={10}>2 Beds</option>

                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='p-3'>
                                <strong className='text-danger pt-2 btn'>Reset Search</strong>
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-right'>
                            <button className='btn btn-success'>
                                Search Properties<i class="fa fa-arrow-right pl-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Box>

    )
}
