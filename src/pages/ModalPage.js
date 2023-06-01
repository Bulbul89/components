import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage () {
    const [showModal,setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I accept
            </Button>
        </div>
    )
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
              <p> here is an important argument for you to accept</p>
                  </Modal>

    return(
        <div className="relative">
            <Button  onClick={handleClick} primary> Open Modal </Button>
             {showModal && modal}
             <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, imperdiet et feugiat varius, tempor et dolor. Etiam malesuada sit amet dui ut iaculis. Suspendisse sollicitudin ipsum id urna viverra feugiat. Aliquam at risus pretium, pretium risus porta, dignissim dui. Curabitur vel ipsum nec elit pretium commodo eget commodo metus. Phasellus finibus lacinia turpis, ut tristique turpis consectetur nec. Duis non risus et eros hendrerit posuere sit amet viverra elit. Proin faucibus ultrices ultricies. Suspendisse lacus urna, iaculis non commodo et, ullamcorper eu tortor. Proin ac feugiat sapien. In ut leo imperdiet, scelerisque nibh ac, auctor quam. Nulla rhoncus cursus porttitor.
                </p>
              </div>
        </div>
    )
}
export default ModalPage;