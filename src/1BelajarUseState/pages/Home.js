import React, { Component } from 'react'
import Hitung from '../components/Hitung'

export default class Home extends Component {
    render() {
        return(
            <div style={{ padding: '50px' }}>
                <header>
                    <h2>Aplikasi Penghitung Jumlah Pengunjung Mall Matahari</h2>
                </header>
                <hr/>
                <Hitung/>
                <hr/>
                <footer>
                    <p>Create By</p>
                </footer>
            </div>
        )
    }
}