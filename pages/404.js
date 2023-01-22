import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Layout from '@/components/layout/Layout'

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className='text-center d-flex justify-content-center align-items-center' style={{ height: "60vh" }}>
                <div>
                    <h1 className='mb-5'>Bạn vào nhầm địa chỉ rồi!!</h1>
                    <h2> <span >(╯°□°）╯︵ ┻━┻</span></h2>
                    <div className=' mt-5'>
                        <Link href="/">
                            <Button>
                                <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                                Trở lại gấp
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </Layout>
    )
}