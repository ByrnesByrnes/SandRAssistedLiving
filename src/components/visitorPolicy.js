import React, { useState } from 'react'
import { Modal, Typography, Row, Col, List } from 'antd';
import Icon from "@ant-design/icons";
import { CgClose } from "react-icons/cg";

const { Text, Title } = Typography;
const { Item } = List;

const VisitorPolicy = () => {
    const [open, setOpen] = useState(false);

    const listData = [
        "Any representative of the State who is authorized access to residents;",
        "The resident’s individual physician;",
        "The State Long Term Care Ombudsman;",
        "Immediate family or other relatives (subject to the resident’s right to deny or withdraw consent at any time;",
        "Others who are visiting with the consent of the resident, subject to reasonable restrictions and the resident’s right to deny or withdraw consent at any time;",
        "Reasonable access to any entity or individual who provides health, social, legal, or other services to the resident, at the resident’s consent;",
        "Essential Caregivers."
    ]

    const listDataTwo = [
        "End-of-Life Situations",
        "A resident who was living with family before being admitted to the provider’s care is struggling with the change in environment and lack of in person family support.",
        "The resident is making one or more major medical decisions.",
        "A resident is experiencing emotional distress or grieving the loss of a friend or family member who recently died.",
        "A resident needs cueing or encouragement to eat or drink which was previously provided by a family member or caregiver.",
        "A resident who used to talk and interact with others is seldom speaking."
    ]

    const listDataThree = [
        "Sign-in upon entering the community and before interacting with any staff, resident, family members or friends. By signing in, the visitor agrees in writing to follow the policies and procedures.",
        "Comply with the infection control and educational policies for visitors. Infection control policies may require a visitor to wear Personal Protection Equipment (PPE), including properly wearing a face mask and other necessary PPE, and performing hand hygiene. Staff will provide directions on the proper use of PPE.",
        "Submit to a screening which may include temperature check and/or a questionnaire about health status.",
        "Visitors are NOT required to submit proof of vaccination or immunization.",
        "Although minimizing physical contact and social distancing may be encouraged to limit exposure, consensual physical contact between a resident and visitor is not prohibited.",
        "All visits are subject to monitoring for compliance with all infection control procedures, including the appropriate use of PPE. S &amp; R may suspend in-person visitation of a specific visitor if the visitor violates the policies and procedures."
    ]

    return (
        <>

            <button style={{ padding: "4px 8px", background: "none", border: "none", cursor: "pointer" }} className="footer__link" onClick={() => setOpen(true)}>Visitor Policy</button>
            <Modal
                title={<Title level={3}>S &amp; R Assisted Living Visitation Policy and Procedure</Title>}
                open={open}
                onCancel={() => setOpen(false)}
                centered
                closeIcon={<Icon component={CgClose} />}
                footer={null}
                width={800}
            >
                <Row gutter={[16, 8]}>
                    <Col xs={24} sm={24} md={12} order={1}>
                        <Title level={5}>Objective:</Title>
                        <Text> To protect the right of our residents to have visitors.</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} order={2}>
                        <Title level={5}>Responsibility:</Title>
                        <Text>All Staff</Text>
                    </Col>
                    <Col xs={{ span: 24, order: 4 }} sm={{ span: 24, order: 3 }} md={12}>
                        <Title level={5}>Standard:</Title>
                        <Text>The Assisted Living Center provides immediate access to the
                            resident for guests and representatives of local, state, and federal agencies.</Text>
                    </Col>
                    <Col xs={{ span: 24, order: 3 }} sm={{ span: 24, order: 4 }} md={12}>
                        <Title level={5}>Guideline:</Title>
                        <Text>General Visitation</Text>
                    </Col>
                </Row>
                <List
                    style={{ marginTop: "2em" }}
                    bordered
                    header={<Title level={4}>S&amp; R provides immediate access to any resident by the following:</Title>}
                >
                    {listData.map((text, i) => (
                        <Item key={i}>
                            <Text>{text}</Text>
                        </Item>
                    ))}
                </List>
                <Row style={{ marginTop: "1em" }} gutter={[0, 8]}>
                    <Col>
                        <Text>
                            S &amp; R does not limit the number of visitors nor are visitors subject to
                            visiting hour limitations or other restrictions not imposed by the resident.
                            S &amp; R may request a change in location of the visits to assist care giving or
                            protect the privacy of other residents, or if the visits infringe upon the rights
                            of other residents.
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            An individual or representative of an agency that provides health, social,
                            legal, or other services to the resident has the right of “reasonable access” to
                            the resident.
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            S &amp; R may establish guidelines regarding the timing or other
                            circumstances of the visit, such as location, provided the guidelines allow for
                            ready access to these services.
                        </Text>
                    </Col>
                    <Col>
                        S &amp; R allows representatives of the State Ombudsman program to
                        examine a resident’s clinical records with the permission of the resident or
                        the resident’s legal representative, and to the extent allowed by state law.
                    </Col>
                </Row>
                <Row gutter={[0, 8]} style={{ marginTop: "2em" }}>
                    <Col>
                        <Title level={4}>STANDARDS &amp; GUIDELINES</Title>
                        <Text>
                            Suggested visiting hours are 9:00 a.m. to 9:00 p.m.; however, families and
                            visitors can visit 24/7, 365 days per year. All visitors must sign-in upon
                            entering the community and before interacting with any staff, resident,
                            family members or friends. By signing, the visitor agrees to follow the
                            policies and procedures. Visitors can stay as long as they would like, there
                            are no time limittions.
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            S &amp; R may suspend in-person visitation of a specific visitor if the visitor
                            violates the policies and procedures.
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            The Assisted Living Manager or Designee will ensure staff adhere to the policies and procedures.
                        </Text>
                    </Col>
                    <Col>
                        <Text strong>
                            To support and comply with the “No Patient Left Alone Act”, S &amp; R will
                            allow in-person visitation in all of the following circumstances, unless the
                            resident objects:
                        </Text>
                    </Col>
                </Row>
                <List
                    style={{ marginTop: "2em" }}
                    bordered
                    header={<Title level={4}>S &amp; R provides immediate access to any resident by the following:</Title>}
                >
                    {listDataTwo.map((text, i) => (
                        <Item key={i}>
                            <Text>{text}</Text>
                        </Item>
                    ))}
                </List>
                <Row gutter={[0, 8]}>
                    <Col>
                        <Title level={5}>Essential Caregivers:</Title>
                        <Text>
                            At times there may be circumstances where a resident visitation may be
                            scaled back in efforts to ensure resident and staff safety, and to stop the
                            spread of infection, such as pandemic, flu, or presence of infectious diseases
                            which may require isolation. In such cases S &amp; R shall comply with all
                            current local, state or national standards.
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            S &amp; R allows residents to designate a family member, friend, guardian,
                            or other individual as an Essential Caregiver. The Essential Caregiver is not
                            required to provide necessary care to a resident and S &amp; R may not
                            require an Essential Caregiver to provide such care.
                        </Text>
                    </Col>
                </Row>
                <List
                    style={{ marginTop: "2em" }}
                    bordered
                    header={<Title level={4}>S&amp; R provides immediate access to any resident by the following:</Title>}
                >
                    {listDataThree.map((text, i) => (
                        <Item key={i}>
                            <Text>{text}</Text>
                        </Item>
                    ))}
                </List>
                <Title level={5}>S &amp; R is committed to the wellbeing of our Residents, and this includes a resident’s right to visitation with their family.</Title>
            </Modal>
        </>
    )
}

export default VisitorPolicy;