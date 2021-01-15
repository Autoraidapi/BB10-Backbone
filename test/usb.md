USB Version: 2.0.0
Class Code: 239
Subclass Code: 2
Protocol Code: 1
Port Number: 3
Vendor Id: 0x0FCA
Product Id: 0x8017
Device Version: 2.4.0
Manufacturer Name: Research In Motion, Ltd.
Product Name: BlackBerry
Serial Number: 5C1F2E19FB73C918EC20A194645CA468DFC643CD
Active Configuration: 1
Configuration 1
Interface 0
Alternate 0
Class Code: 2
Subclass Code: 13
Protocol Code: 0
Endpoint 1 (INBOUND)
USB Transfer Type: INTERRUPT
Packet Size: 16
Interface 1
Alternate 0
Class Code: 10
Subclass Code: 0
Protocol Code: 1
Alternate 1
Class Code: 10
Subclass Code: 0
Protocol Code: 1
Endpoint 2 (INBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 3 (OUTBOUND)
USB Transfer Type: BULK
Packet Size: 512
Interface 2
Alternate 0
Class Code: 2
Subclass Code: 13
Protocol Code: 0
Endpoint 4 (INBOUND)
USB Transfer Type: INTERRUPT
Packet Size: 16
Interface 3
Alternate 0
Class Code: 10
Subclass Code: 0
Protocol Code: 1
Alternate 1
Class Code: 10
Subclass Code: 0
Protocol Code: 1
Endpoint 5 (INBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 6 (OUTBOUND)
USB Transfer Type: BULK
Packet Size: 512
Interface 4
Alternate 0
Class Code: 255
Subclass Code: 1
Protocol Code: 255
Endpoint 7 (INBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 7 (OUTBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 8 (INBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 8 (OUTBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 9 (INBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 9 (OUTBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 10 (INBOUND)
USB Transfer Type: BULK
Packet Size: 512
Endpoint 10 (OUTBOUND)
USB Transfer Type: BULK
Packet Size: 512

```html
<body>
    <tabbox>
        <tabs>
            <tab tabindex="-1" aria-selected="false">Test Devices</tab>
            <tab tabindex="-1" aria-selected="false">Devices</tab>

            <tab id="c1ce5430-bb44-4695-ad74-c5a1061c3664" selected="selected" tabindex="0" aria-selected="true">
                BlackBerry</tab>
        </tabs>
        <tabpanels>
            <tabpanel>
                <!-- Test Devices -->
                <h2>Test Devices</h2>
                <p>
                </p>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Serial number</th>
                            <th>Landing page</th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="test-device-list"></tbody>

                    <template id="test-device-row">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button>Remove</button></td>
                        </tr>
                    </template>

                </table>
                <p></p>
                <div class="page-section">
                    <strong>Add a test device:</strong>
                    <form id="add-test-device-form" action="">
                        <p>
                            <label>
                                Name: <input id="test-device-name" type="text" size="40">
                            </label>
                        </p>
                        <p>
                            <label>
                                Serial number:
                                <input id="test-device-serial" type="text" size="40">
                            </label>
                        </p>
                        <p>
                            <label>
                                Landing page:
                                <input id="test-device-landing-page" type="text" size="40">
                            </label>
                        </p>
                        <button type="submit">Add</button>
                        <span id="add-test-device-result"></span>
                    </form>
                </div>
            </tabpanel>

            <tabpanel>
                <!-- Devices -->
                <h2>Devices</h2>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Bus Number</th>
                            <th>Port Number</th>
                            <th>Vendor Id</th>
                            <th>Product Id</th>
                            <th>Manufacturer Name</th>
                            <th>Product Name</th>
                            <th>Serial Number</th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="device-list">
                        <tr>
                            <td>0</td>
                            <td>8</td>
                            <td>0x8564</td>
                            <td>0x1000</td>
                            <td>JetFlash</td>
                            <td>Mass Storage Device</td>
                            <td>1675096968</td>
                            <td><button>Inspect</button></td>
                        </tr>

                        <tr>
                            <td>0</td>
                            <td>6</td>
                            <td>0x1058</td>
                            <td>0x25E1</td>
                            <td></td>
                            <td></td>
                            <td>57584E314541383645543157</td>
                            <td><button>Inspect</button></td>
                        </tr>

                        <tr>
                            <td>0</td>
                            <td>3</td>
                            <td>0x0FCA</td>
                            <td>0x8017</td>
                            <td>Research In Motion, Ltd.</td>
                            <td>BlackBerry</td>
                            <td>5C1F2E19FB73C918EC20A194645CA468DFC643CD</td>
                            <td><button>Inspect</button></td>
                        </tr>

                        <tr>
                            <td>0</td>
                            <td>2</td>
                            <td>0x046D</td>
                            <td>0xC077</td>
                            <td>Logitech</td>
                            <td>USB Optical Mouse</td>
                            <td></td>
                            <td><button>Inspect</button></td>
                        </tr>

                        <tr>
                            <td>0</td>
                            <td>4</td>
                            <td>0x147E</td>
                            <td>0x1002</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button>Inspect</button></td>
                        </tr>

                        <tr>
                            <td>0</td>
                            <td>6</td>
                            <td>0x5986</td>
                            <td>0x02D2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button>Inspect</button></td>
                        </tr>

                        <tr>
                            <td>0</td>
                            <td>3</td>
                            <td>0x8087</td>
                            <td>0x07DA</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button>Inspect</button></td>
                        </tr>
                    </tbody>

                    <template id="device-row">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button>Inspect</button></td>
                        </tr>
                    </template>

                </table>
            </tabpanel>

            <tabpanel selected="selected">
                <tree class="tree-view" tabindex="0" role="tree" aria-activedescendant="tree-item-autogen-id-85">
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-0"
                        aria-labelledby="tree-item-label-autogen-id-1">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-1">USB Version: 2.0.0</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-1"
                        aria-labelledby="tree-item-label-autogen-id-2">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-2">Class Code: 239</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-2"
                        aria-labelledby="tree-item-label-autogen-id-3">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-3">Subclass Code: 2</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-3"
                        aria-labelledby="tree-item-label-autogen-id-4">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-4">Protocol Code: 1</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-4"
                        aria-labelledby="tree-item-label-autogen-id-5">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-5">Port Number: 3</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-5"
                        aria-labelledby="tree-item-label-autogen-id-6">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-6">Vendor Id: 0x0FCA</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-6"
                        aria-labelledby="tree-item-label-autogen-id-7">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-7">Product Id: 0x8017</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-7"
                        aria-labelledby="tree-item-label-autogen-id-8">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-8">Device Version: 2.4.0</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-8"
                        aria-labelledby="tree-item-label-autogen-id-9">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-9">Manufacturer Name: Research In Motion, Ltd.</span>
                        </div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-9"
                        aria-labelledby="tree-item-label-autogen-id-10">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-10">Product Name: BlackBerry</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-10"
                        aria-labelledby="tree-item-label-autogen-id-11">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-11">Serial Number:
                                5C1F2E19FB73C918EC20A194645CA468DFC643CD</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-11"
                        aria-labelledby="tree-item-label-autogen-id-12">
                        <div class="tree-row" style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-12">Active Configuration: 1</span></div>
                        <div class="tree-children" role="group"></div>
                    </div>
                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-12"
                        aria-labelledby="tree-item-label-autogen-id-13" has-children="true" may-have-children=""
                        aria-expanded="true" expanded="">
                        <div class="tree-row" has-children="true" may-have-children=""
                            style="padding-inline-start: 0px;"><span class="expand-icon"></span><span
                                class="tree-label-icon"></span><span class="tree-label"
                                id="tree-item-label-autogen-id-13">Configuration 1</span></div>
                        <div class="tree-children" role="group" expanded="">
                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-13"
                                aria-labelledby="tree-item-label-autogen-id-14" has-children="true" may-have-children=""
                                aria-expanded="true" expanded="">
                                <div class="tree-row" has-children="true" may-have-children=""
                                    style="padding-inline-start: 20px;"><span class="expand-icon"></span><span
                                        class="tree-label-icon"></span><span class="tree-label"
                                        id="tree-item-label-autogen-id-14">Interface 0</span></div>
                                <div class="tree-children" role="group" expanded="">
                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-14"
                                        aria-labelledby="tree-item-label-autogen-id-15" has-children="true"
                                        may-have-children="" aria-expanded="true" expanded="">
                                        <div class="tree-row" has-children="true" may-have-children=""
                                            style="padding-inline-start: 40px;"><span class="expand-icon"></span><span
                                                class="tree-label-icon"></span><span class="tree-label"
                                                id="tree-item-label-autogen-id-15">Alternate 0</span></div>
                                        <div class="tree-children" role="group" expanded="">
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-15"
                                                aria-labelledby="tree-item-label-autogen-id-16">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-16">Class Code: 2</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-16"
                                                aria-labelledby="tree-item-label-autogen-id-17">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-17">Subclass Code: 13</span>
                                                </div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-17"
                                                aria-labelledby="tree-item-label-autogen-id-18">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-18">Protocol Code: 0</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-18"
                                                aria-labelledby="tree-item-label-autogen-id-19" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-19">Endpoint 1 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-19"
                                                        aria-labelledby="tree-item-label-autogen-id-20">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-20">USB Transfer Type:
                                                                INTERRUPT</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-20"
                                                        aria-labelledby="tree-item-label-autogen-id-21">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-21">Packet Size:
                                                                16</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-21"
                                aria-labelledby="tree-item-label-autogen-id-22" has-children="true" may-have-children=""
                                aria-expanded="true" expanded="">
                                <div class="tree-row" has-children="true" may-have-children=""
                                    style="padding-inline-start: 20px;"><span class="expand-icon"></span><span
                                        class="tree-label-icon"></span><span class="tree-label"
                                        id="tree-item-label-autogen-id-22">Interface 1</span></div>
                                <div class="tree-children" role="group" expanded="">
                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-22"
                                        aria-labelledby="tree-item-label-autogen-id-23" has-children="true"
                                        may-have-children="" aria-expanded="true" expanded="">
                                        <div class="tree-row" has-children="true" may-have-children=""
                                            style="padding-inline-start: 40px;"><span class="expand-icon"></span><span
                                                class="tree-label-icon"></span><span class="tree-label"
                                                id="tree-item-label-autogen-id-23">Alternate 0</span></div>
                                        <div class="tree-children" role="group" expanded="">
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-23"
                                                aria-labelledby="tree-item-label-autogen-id-24">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-24">Class Code: 10</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-24"
                                                aria-labelledby="tree-item-label-autogen-id-25">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-25">Subclass Code: 0</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-25"
                                                aria-labelledby="tree-item-label-autogen-id-26">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-26">Protocol Code: 1</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-26"
                                        aria-labelledby="tree-item-label-autogen-id-27" has-children="true"
                                        may-have-children="" aria-expanded="true" expanded="">
                                        <div class="tree-row" has-children="true" may-have-children=""
                                            style="padding-inline-start: 40px;"><span class="expand-icon"></span><span
                                                class="tree-label-icon"></span><span class="tree-label"
                                                id="tree-item-label-autogen-id-27">Alternate 1</span></div>
                                        <div class="tree-children" role="group" expanded="">
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-27"
                                                aria-labelledby="tree-item-label-autogen-id-28">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-28">Class Code: 10</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-28"
                                                aria-labelledby="tree-item-label-autogen-id-29">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-29">Subclass Code: 0</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-29"
                                                aria-labelledby="tree-item-label-autogen-id-30">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-30">Protocol Code: 1</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-30"
                                                aria-labelledby="tree-item-label-autogen-id-31" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-31">Endpoint 2 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-31"
                                                        aria-labelledby="tree-item-label-autogen-id-32">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-32">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-32"
                                                        aria-labelledby="tree-item-label-autogen-id-33">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-33">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-33"
                                                aria-labelledby="tree-item-label-autogen-id-34" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-34">Endpoint 3 (OUTBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-34"
                                                        aria-labelledby="tree-item-label-autogen-id-35">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-35">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-35"
                                                        aria-labelledby="tree-item-label-autogen-id-36">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-36">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-36"
                                aria-labelledby="tree-item-label-autogen-id-37" has-children="true" may-have-children=""
                                aria-expanded="true" expanded="">
                                <div class="tree-row" has-children="true" may-have-children=""
                                    style="padding-inline-start: 20px;"><span class="expand-icon"></span><span
                                        class="tree-label-icon"></span><span class="tree-label"
                                        id="tree-item-label-autogen-id-37">Interface 2</span></div>
                                <div class="tree-children" role="group" expanded="">
                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-37"
                                        aria-labelledby="tree-item-label-autogen-id-38" has-children="true"
                                        may-have-children="" aria-expanded="true" expanded="">
                                        <div class="tree-row" has-children="true" may-have-children=""
                                            style="padding-inline-start: 40px;"><span class="expand-icon"></span><span
                                                class="tree-label-icon"></span><span class="tree-label"
                                                id="tree-item-label-autogen-id-38">Alternate 0</span></div>
                                        <div class="tree-children" role="group" expanded="">
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-38"
                                                aria-labelledby="tree-item-label-autogen-id-39">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-39">Class Code: 2</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-39"
                                                aria-labelledby="tree-item-label-autogen-id-40">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-40">Subclass Code: 13</span>
                                                </div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-40"
                                                aria-labelledby="tree-item-label-autogen-id-41">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-41">Protocol Code: 0</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-41"
                                                aria-labelledby="tree-item-label-autogen-id-42" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-42">Endpoint 4 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-42"
                                                        aria-labelledby="tree-item-label-autogen-id-43">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-43">USB Transfer Type:
                                                                INTERRUPT</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-43"
                                                        aria-labelledby="tree-item-label-autogen-id-44">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-44">Packet Size:
                                                                16</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-44"
                                aria-labelledby="tree-item-label-autogen-id-45" has-children="true" may-have-children=""
                                aria-expanded="true" expanded="">
                                <div class="tree-row" has-children="true" may-have-children=""
                                    style="padding-inline-start: 20px;"><span class="expand-icon"></span><span
                                        class="tree-label-icon"></span><span class="tree-label"
                                        id="tree-item-label-autogen-id-45">Interface 3</span></div>
                                <div class="tree-children" role="group" expanded="">
                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-45"
                                        aria-labelledby="tree-item-label-autogen-id-46" has-children="true"
                                        may-have-children="" aria-expanded="true" expanded="">
                                        <div class="tree-row" has-children="true" may-have-children=""
                                            style="padding-inline-start: 40px;"><span class="expand-icon"></span><span
                                                class="tree-label-icon"></span><span class="tree-label"
                                                id="tree-item-label-autogen-id-46">Alternate 0</span></div>
                                        <div class="tree-children" role="group" expanded="">
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-46"
                                                aria-labelledby="tree-item-label-autogen-id-47">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-47">Class Code: 10</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-47"
                                                aria-labelledby="tree-item-label-autogen-id-48">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-48">Subclass Code: 0</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-48"
                                                aria-labelledby="tree-item-label-autogen-id-49">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-49">Protocol Code: 1</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-49"
                                        aria-labelledby="tree-item-label-autogen-id-50" has-children="true"
                                        may-have-children="" aria-expanded="true" expanded="">
                                        <div class="tree-row" has-children="true" may-have-children=""
                                            style="padding-inline-start: 40px;"><span class="expand-icon"></span><span
                                                class="tree-label-icon"></span><span class="tree-label"
                                                id="tree-item-label-autogen-id-50">Alternate 1</span></div>
                                        <div class="tree-children" role="group" expanded="">
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-50"
                                                aria-labelledby="tree-item-label-autogen-id-51">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-51">Class Code: 10</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-51"
                                                aria-labelledby="tree-item-label-autogen-id-52">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-52">Subclass Code: 0</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-52"
                                                aria-labelledby="tree-item-label-autogen-id-53">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-53">Protocol Code: 1</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-53"
                                                aria-labelledby="tree-item-label-autogen-id-54" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-54">Endpoint 5 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-54"
                                                        aria-labelledby="tree-item-label-autogen-id-55">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-55">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-55"
                                                        aria-labelledby="tree-item-label-autogen-id-56">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-56">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-56"
                                                aria-labelledby="tree-item-label-autogen-id-57" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-57">Endpoint 6 (OUTBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-57"
                                                        aria-labelledby="tree-item-label-autogen-id-58">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-58">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-58"
                                                        aria-labelledby="tree-item-label-autogen-id-59">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-59">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-59"
                                aria-labelledby="tree-item-label-autogen-id-60" has-children="true" may-have-children=""
                                aria-expanded="true" expanded="">
                                <div class="tree-row" has-children="true" may-have-children=""
                                    style="padding-inline-start: 20px;"><span class="expand-icon"></span><span
                                        class="tree-label-icon"></span><span class="tree-label"
                                        id="tree-item-label-autogen-id-60">Interface 4</span></div>
                                <div class="tree-children" role="group" expanded="">
                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-60"
                                        aria-labelledby="tree-item-label-autogen-id-61" has-children="true"
                                        may-have-children="" aria-expanded="true" expanded="">
                                        <div class="tree-row" has-children="true" may-have-children=""
                                            style="padding-inline-start: 40px;"><span class="expand-icon"></span><span
                                                class="tree-label-icon"></span><span class="tree-label"
                                                id="tree-item-label-autogen-id-61">Alternate 0</span></div>
                                        <div class="tree-children" role="group" expanded="">
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-61"
                                                aria-labelledby="tree-item-label-autogen-id-62">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-62">Class Code: 255</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-62"
                                                aria-labelledby="tree-item-label-autogen-id-63">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-63">Subclass Code: 1</span></div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-63"
                                                aria-labelledby="tree-item-label-autogen-id-64">
                                                <div class="tree-row" style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-64">Protocol Code: 255</span>
                                                </div>
                                                <div class="tree-children" role="group"></div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-64"
                                                aria-labelledby="tree-item-label-autogen-id-65" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-65">Endpoint 7 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-65"
                                                        aria-labelledby="tree-item-label-autogen-id-66">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-66">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-66"
                                                        aria-labelledby="tree-item-label-autogen-id-67">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-67">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-67"
                                                aria-labelledby="tree-item-label-autogen-id-68" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-68">Endpoint 7 (OUTBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-68"
                                                        aria-labelledby="tree-item-label-autogen-id-69">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-69">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-69"
                                                        aria-labelledby="tree-item-label-autogen-id-70">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-70">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-70"
                                                aria-labelledby="tree-item-label-autogen-id-71" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-71">Endpoint 8 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-71"
                                                        aria-labelledby="tree-item-label-autogen-id-72">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-72">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-72"
                                                        aria-labelledby="tree-item-label-autogen-id-73">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-73">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-73"
                                                aria-labelledby="tree-item-label-autogen-id-74" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-74">Endpoint 8 (OUTBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-74"
                                                        aria-labelledby="tree-item-label-autogen-id-75">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-75">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-75"
                                                        aria-labelledby="tree-item-label-autogen-id-76">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-76">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-76"
                                                aria-labelledby="tree-item-label-autogen-id-77" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-77">Endpoint 9 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-77"
                                                        aria-labelledby="tree-item-label-autogen-id-78">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-78">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-78"
                                                        aria-labelledby="tree-item-label-autogen-id-79">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-79">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-79"
                                                aria-labelledby="tree-item-label-autogen-id-80" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-80">Endpoint 9 (OUTBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-80"
                                                        aria-labelledby="tree-item-label-autogen-id-81">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-81">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-81"
                                                        aria-labelledby="tree-item-label-autogen-id-82">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-82">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-82"
                                                aria-labelledby="tree-item-label-autogen-id-83" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;"><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-83">Endpoint 10 (INBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-83"
                                                        aria-labelledby="tree-item-label-autogen-id-84">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-84">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-84"
                                                        aria-labelledby="tree-item-label-autogen-id-85">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-85">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tree-item" role="treeitem" id="tree-item-autogen-id-85"
                                                aria-labelledby="tree-item-label-autogen-id-86" has-children="true"
                                                may-have-children="" aria-expanded="true" expanded="" selected="">
                                                <div class="tree-row" has-children="true" may-have-children=""
                                                    style="padding-inline-start: 60px;" selected=""><span
                                                        class="expand-icon"></span><span
                                                        class="tree-label-icon"></span><span class="tree-label"
                                                        id="tree-item-label-autogen-id-86">Endpoint 10 (OUTBOUND)</span>
                                                </div>
                                                <div class="tree-children" role="group" expanded="">
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-86"
                                                        aria-labelledby="tree-item-label-autogen-id-87">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-87">USB Transfer Type:
                                                                BULK</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                    <div class="tree-item" role="treeitem" id="tree-item-autogen-id-87"
                                                        aria-labelledby="tree-item-label-autogen-id-88">
                                                        <div class="tree-row" style="padding-inline-start: 80px;"><span
                                                                class="expand-icon"></span><span
                                                                class="tree-label-icon"></span><span class="tree-label"
                                                                id="tree-item-label-autogen-id-88">Packet Size:
                                                                512</span></div>
                                                        <div class="tree-children" role="group"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tree>
                <div class="descriptor-button">
                    <button class="device-descriptor-button">Get Device Descriptor</button>
                </div>
                <div class="device-descriptor-panel" hidden=""></div>
                <div class="descriptor-button">
                    <button class="configuration-descriptor-button">
                        Get Configuration Descriptor
                    </button>
                </div>
                <div class="configuration-descriptor-panel" hidden=""></div>
                <div class="descriptor-button">
                    <button class="string-descriptor-button">Get String Descriptor</button>
                </div>
                <div class="string-descriptor-panel" hidden="">
                    String Descriptor Index:
                    <input id="index-input" type="number" min="1" list="indexes-c1ce5430-bb44-4695-ad74-c5a1061c3664">
                    <datalist id="indexes-c1ce5430-bb44-4695-ad74-c5a1061c3664"></datalist>
                    Language Code:
                    <input id="language-code-input" list="languages-c1ce5430-bb44-4695-ad74-c5a1061c3664">
                    <datalist id="languages-c1ce5430-bb44-4695-ad74-c5a1061c3664"></datalist>
                    <button>GET</button>
                </div>
                <div class="descriptor-button">
                    <button class="bos-descriptor-button">
                        Get WebUSB &amp; Microsoft OS 2.0 Descriptors
                    </button>
                </div>
                <div class="bos-descriptor-panel" hidden=""></div>
                <div class="descriptor-button">
                    <button class="testing-tool-button">Testing Tool Panel</button>
                </div>
                <div class="testing-tool-panel" hidden="">
                    <warn>Warning: This tool can send arbitrary commands to the device. Invalid commands may cause
                        unexpected results.</warn>
                    <select id="input-type">
                        <option label="Decimal with Dropdown Menu"></option>
                        <option label="Hex Bytes"></option>
                    </select>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>bmRequestType</th>
                                <th>bRequest</th>
                                <th>wValue</th>
                                <th>wIndex</th>
                                <th>wLength</th>
                            </tr>
                        </thead>
                        <tbody id="testing-tool">
                            <tr>
                                <td>
                                    <select id="transfer-direction">
                                        <option label="Host-to-Device" value="Host-to-Device">
                                        </option>
                                        <option label="Device-to-Host" value="Device-to-Host">
                                        </option>
                                    </select>
                                    <select id="transfer-type">
                                        <option label="Standard" value="STANDARD"></option>
                                        <option label="Class" value="CLASS"></option>
                                        <option label="Vendor" value="VENDOR"></option>
                                    </select>
                                    <select id="transfer-recipient">
                                        <option label="Device" value="DEVICE"></option>
                                        <option label="Interface" value="INTERFACE"></option>
                                        <option label="Endpoint" value="ENDPOINT"></option>
                                        <option label="Other" value="OTHER"></option>
                                    </select>
                                </td>
                                <td><input id="query-request" type="number" placeholder="0"></td>
                                <td><input id="query-value" type="number" placeholder="0"></td>
                                <td><input id="query-index" type="number" placeholder="0"></td>
                                <td><input id="query-length" type="number" placeholder="0"></td>
                                <td><button>Send</button></td>
                            </tr>
                            <tr hidden="">
                                <td>0x<input id="query-request-type" placeholder="00"></td>
                                <td>0x<input id="query-request" placeholder="00"></td>
                                <td>0x<input id="query-value" placeholder="0000"></td>
                                <td>0x<input id="query-index" placeholder="0000"></td>
                                <td>0x<input id="query-length" placeholder="0000"></td>
                                <td><button>Send</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="data-input-area">
                        Data (in Hex):
                        <textarea cols="31"></textarea>
                    </div>
                </div>
            </tabpanel>
        </tabpanels>
    </tabbox>


    <template id="tab-template">
        <tab></tab>
    </template>

    <template id="device-tabpanel-template">
        <tabpanel>
            <tree class="tree-view"></tree>
            <div class="descriptor-button">
                <button class="device-descriptor-button">Get Device Descriptor</button>
            </div>
            <div class="device-descriptor-panel" hidden=""></div>
            <div class="descriptor-button">
                <button class="configuration-descriptor-button">
                    Get Configuration Descriptor
                </button>
            </div>
            <div class="configuration-descriptor-panel" hidden=""></div>
            <div class="descriptor-button">
                <button class="string-descriptor-button">Get String Descriptor</button>
            </div>
            <div class="string-descriptor-panel" hidden="">
                String Descriptor Index:
                <input id="index-input" type="number" min="1" list="indexes">
                <datalist id="indexes"></datalist>
                Language Code:
                <input id="language-code-input" list="languages">
                <datalist id="languages"></datalist>
                <button>GET</button>
            </div>
            <div class="descriptor-button">
                <button class="bos-descriptor-button">
                    Get WebUSB &amp; Microsoft OS 2.0 Descriptors
                </button>
            </div>
            <div class="bos-descriptor-panel" hidden=""></div>
            <div class="descriptor-button">
                <button class="testing-tool-button">Testing Tool Panel</button>
            </div>
            <div class="testing-tool-panel" hidden="">
                <select id="input-type">
                    <option label="Decimal with Dropdown Menu"></option>
                    <option label="Hex Bytes"></option>
                </select>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>bmRequestType</th>
                            <th>bRequest</th>
                            <th>wValue</th>
                            <th>wIndex</th>
                            <th>wLength</th>
                        </tr>
                    </thead>
                    <tbody id="testing-tool">
                        <tr>
                            <td>
                                <select id="transfer-direction">
                                    <option label="Host-to-Device" value="Host-to-Device">
                                    </option>
                                    <option label="Device-to-Host" value="Device-to-Host">
                                    </option>
                                </select>
                                <select id="transfer-type">
                                    <option label="Standard" value="STANDARD"></option>
                                    <option label="Class" value="CLASS"></option>
                                    <option label="Vendor" value="VENDOR"></option>
                                </select>
                                <select id="transfer-recipient">
                                    <option label="Device" value="DEVICE"></option>
                                    <option label="Interface" value="INTERFACE"></option>
                                    <option label="Endpoint" value="ENDPOINT"></option>
                                    <option label="Other" value="OTHER"></option>
                                </select>
                            </td>
                            <td><input id="query-request" type="number" placeholder="0"></td>
                            <td><input id="query-value" type="number" placeholder="0"></td>
                            <td><input id="query-index" type="number" placeholder="0"></td>
                            <td><input id="query-length" type="number" placeholder="0"></td>
                            <td><button>Send</button></td>
                        </tr>
                        <tr hidden="">
                            <td>0x<input id="query-request-type" placeholder="00"></td>
                            <td>0x<input id="query-request" placeholder="00"></td>
                            <td>0x<input id="query-value" placeholder="0000"></td>
                            <td>0x<input id="query-index" placeholder="0000"></td>
                            <td>0x<input id="query-length" placeholder="0000"></td>
                            <td><button>Send</button></td>
                        </tr>
                    </tbody>
                </table>
                <div id="data-input-area">
                    Data (in Hex):
                    <textarea cols="31"></textarea>
                </div>
            </div>
        </tabpanel>
    </template>

    <template id="descriptor-panel-template">
        <descriptorpanel>
            <tree class="raw-data-tree-view"></tree>
            <div class="raw-data-byte-view"></div>
        </descriptorpanel>
    </template>

    <template id="raw-data-byte-container-template">
        <div></div>
    </template>

    <template id="raw-data-byte-template">
        <span></span>
    </template>

    <template id="raw-data-tree-button">
        <button>GET</button>
    </template>

    <template id="descriptor-panel-title">
        <descriptorpaneltitle></descriptorpaneltitle>
    </template>

    <script src="usb_internals.js"></script>



</body>
```