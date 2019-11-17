import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class Trainingsschema extends Component {

    render() {
        return (
            <div>
                <h1>Trainingen</h1>

                <p>
                    Jetset traint op verschillende locaties in leuven:
                </p>
                <ul className="normal">
                    <li>Op het kunstgrasveld A naast het zwembad van Kessel-Lo (Stadionlaan 4, Kessel-Lo - KLO A)</li>
                    <li>Op het kunstgrasveld B naast het zwembad van Kessel-Lo (Stadionlaan 4, Kessel-Lo - KLO B)</li>
                    <li>Op het grasveld C naast de parking van het zwembad van Kessel-Lo (Stadionlaan 4, Kessel-Lo - KLO C)</li>
                    <li>Op het voetbalveld achterin bij Heilig Hartinstituut (Hertogstraat 178, Heverlee - HHH)</li>
                    <li>Op het kunstgrasveld aan Bruineveld (Domeinstraat 31, Kessel-Lo - BV)</li>
                    <li>In de sporthal Rijschoolstraat (Rijschoolstraat 21, Leuven - SPORTHAL RIJSCHOOL)</li>
                    <li>In de sporthal Wijnpers (Mechelsevest 90, Leuven - bovenaan in gebouw met klok - DE WIJNPERS)</li>
                </ul>
                <p>
                    Eén keer per week traint onze club samen. In de zomer is dit op het kunstgras van 19u-21u en in de winter is dit in de wijnpers van 19u30-21u30.
                </p>

                <Table id="trainingstabel" responsive >
                    <tbody>
                        <tr>
                            <th></th>
                            <th colSpan="2">maandag</th>
                            <th colSpan="2">dinsdag</th>
                            <th>woensdag</th>
                            <th colSpan="2">donderdag</th>
                            <th>vrijdag</th>
                            <th>zaterdag</th>
                            <th colSpan="2">zondag</th>
                        </tr>
                        <tr>
                            <td>17:00-17:30</td>
                            <td rowSpan="2" colSpan="2"><b>Balloons</b><br />
                                <i>SPORTHAL RIJSCHOOL</i><br />
                                <small>2 wekelijks</small>
                            </td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td></td>
                            <td colSpan="2"></td>

                        </tr>
                        <tr>
                            <td>17:30-18:00</td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td></td>
                            <td colSpan="2"></td>

                        </tr>
                        <tr>
                            <td>18:00-18:30</td>
                            <td colSpan="2"></td>
                            <td rowSpan="3" colSpan="2"><b>ALPHA JET</b><br />
                                <i>KLO A</i><br />
                            </td>
                            <td></td>
                            <td rowSpan="3" colSpan="2"><b>ULM/ALPHA JET</b><br />
                                <i>HHH</i><br />
                            </td>
                            <td></td>
                            <td></td>
                            <td colSpan="2"></td>
                        </tr>
                        <tr>
                            <td>18:30-19:00</td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan="2"></td>
                        </tr>
                        <tr>
                            <td>19:00-19:30</td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td rowSpan="4" colSpan="1"><b>SUNDAY HAT</b><br />
                                <i>KLO B</i><br />
                                sept-okt/mrt-jun

                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>19:30-20:00</td>
                            <td colSpan="2"></td>
                            <td rowSpan="4" colSpan="2"><b>ZEPPS</b><br />
                                <i>KLO C</i><br />
                            </td>
                            <td></td>
                            <td rowSpan="4" colSpan="1"><b>LUV</b><br />
                                <i>HHH</i><br />
                            </td>
                            <td colSpan="1"></td>
                            <td></td>
                            <td></td>
                            <td rowSpan="4" colSpan="1"><b>SUNDAY HAT</b><br />
                                <i>De Wijnpers</i><br />
                                nov-febr
                            </td>
                        </tr>
                        <tr>
                            <td>20:00-20:30</td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>20:30-21:00</td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>


                        </tr>
                        <tr>
                            <td>21:00-21:30</td>
                            <td rowSpan="4" colSpan="1"><b>JETSET OPEN</b><br />
                                <i>KLO A</i><br />
                            </td>
                            <td rowSpan="4" colSpan="1"><b>PROPS OPEN</b><br />
                                <i>KLO B</i><br />
                            </td>
                            <td rowSpan="4">
                                {/* <b>PROPS ALL</b><br />
                                <i>KLO A</i><br /> */}
                            </td>
                            <td rowSpan="4" colSpan="1"><b>JETSET OPEN</b><br />
                                <i>BV</i><br />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>21:30-22:00</td>
                            <td rowSpan="3" colSpan="1"><b>JETSET MIXED</b><br />
                                <i>KLO A</i><br />
                            </td>
                            <td rowSpan="3" colSpan="1"><b>PROPS MIXED</b><br />
                                <i>KLO B</i><br />
                            </td>
                            <td rowSpan="3" colSpan="1"><b>GOLD</b><br />
                                <i>KLO B</i><br />
                            </td>
                            <td></td>
                            <td></td>
                            <td colSpan="2"></td>

                        </tr>
                        <tr>
                            <td>22:00-22:30</td>
                            <td></td>
                            <td></td>
                            <td colSpan="2"></td>

                        </tr>
                        <tr>
                            <td>22:30-23:00</td>
                            <td></td>
                            <td></td>
                            <td colSpan="2"></td>
                        </tr>
                    </tbody>
                </Table>
                <ul>
                    <li><b>KLO A</b>: Op het kunstgrasveld A naast het zwembad van Kessel-Lo (Stadionlaan 4)</li>
                    <li><b>KLO B</b>: Op het kunstgrasveld B naast het zwembad van Kessel-Lo (Stadionlaan 4, Kessel-Lo)</li>
                    <li><b>KLO C</b>: Op het grasveld C naast de parking van het zwembad van Kessel-Lo (Stadionlaan 4, Kessel-Lo)</li>
                    <li><b>HHH</b>: Op het voetbalveld achterin bij Heilig Hartinstituut (Hertogstraat 178, Heverlee)</li>
                    <li><b>BV</b>: Op het kunstgrasveld aan Bruineveld (Domeinstraat 31, Kessel-Lo)</li>
                    <li><b>SPORTHAL RIJSCHOOL</b>: In de sporthal Rijschoolstraat (Rijschoolstraat 21, Leuven)</li>
                    <li><b>DE WIJNPERS</b>: In de sporthal Wijnpers (Mechelsevest 90, Leuven - bovenaan in gebouw met klok)</li>
                </ul>
            </div >
        )
    }
}