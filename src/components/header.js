"use client";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NotesIcon from "@mui/icons-material/Notes";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.jpg";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pathname = usePathname();

  return (
    <>
      <div className={styles.headerporto}>
        <div className={styles.menuwrapper}>
          <div className={styles.menunav}>
            <Link
              className={
                pathname == "/rafaraissar" ? styles.menunavactive : "null"
              }
              href="/"
            >
              Home
            </Link>
            <Link
              className={pathname == "/analog" ? styles.menunavactive : "null"}
              href="/analog"
            >
              About
            </Link>
          </div>
        </div>
        <div>
          <Link href="/" className={styles.titlelogo}>
            <Image
              src={logo}
              alt="Picture of the author"
              placeholder="blur"
              sizes="100vw"
              // Make the image display full width
              style={{
                width: "60px",
                height: "auto",
              }}
              priority
            />
          </Link>
        </div>
        <div className={styles.menuwrapper}>
          <div className={styles.menunav}>
            <Link
              className={
                pathname == "/rafaraissar" ? styles.menunavactive : "null"
              }
              href="/rafaraissar"
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <Accordion className={styles.menunavwork}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.menunavworkicon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={styles.menunavworktab}
            >
              <div className={styles.menunavwork}>Portfolio</div>
            </AccordionSummary>

            <AccordionDetails className={styles.menunavworkdetail}>
              <Link
                for="panel1a-header"
                href="/wedding"
                className={styles.menunavworktabdetail}
              >
                Wedding
              </Link>

              <Link
                href="/work/jayashree-id"
                className={styles.menunavworktabdetail}
              >
                Jayashree.id
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.menumobile}>
          <NotesIcon onClick={handleOpen} className={styles.menumobileicon} />
        </div>
      </div>
      <div
        className={
          open ? styles.menuwrappermobile : styles.menuwrappermobileclose
        }
      >
        <div className={styles.menumobileclose}>
          {" "}
          <CloseIcon onClick={handleClose} />
        </div>

        <div className={styles.menunav}>
          <Link
            className={
              pathname == "/rafaraissar" ? styles.menunavactive : "null"
            }
            href="/rafaraissar"
            onClick={handleClose}
          >
            Bio
          </Link>
          <Link
            className={pathname == "/analog" ? styles.menunavactive : "null"}
            href="/analog"
            onClick={handleClose}
          >
            Analog
          </Link>

          <a
            href="https://www.instagram.com/rafaraissar/"
            target="_blank"
            onClick={handleClose}
          >
            Instagram
          </a>
          <a
            href="http://wa.me/6287815499006"
            target="_blank"
            onClick={handleClose}
          >
            Contact
          </a>
        </div>
        <div>
          <Accordion className={styles.menunavwork}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.menunavworkicon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={styles.menunavworktab}
            >
              <Typography className={styles.menunavwork}>Work</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.menunavworkdetail}>
              <Link
                href="/work/akarumput"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Akarumput
              </Link>
              <Link
                href="/work/jayashree-id"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Jayashree.id
              </Link>
              <Link
                href="/work/kaneabismeals"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Kaneabismeals
              </Link>
              <Link
                href="/work/nappa-milano-x-bella-clarissa"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Nappa Milano x Bella Clarissa
              </Link>
              <Link
                href="/work/nappa-milano-x-thanksinsomnia"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Nappa Milano x Thanksinsomnia
              </Link>
              <Link
                href="/work/orca-id"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Orca.id
              </Link>
              <Link
                href="/work/ourlives"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Ourlives
              </Link>
              <Link
                href="/work/stage"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                Stage
              </Link>
              <Link
                href="/work/t-shirt-nappa-milano"
                onClick={handleClose}
                className={styles.menunavworktabdetail}
              >
                T-Shirt Nappa Milano
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.menusocial}>
          <a
            href="mailto:rafaraissaraf@gmail.com"
            target="_blank"
            onClick={handleClose}
          >
            <div title="email me" className={styles.menusocialitem}>
              <AlternateEmailIcon className={styles.menusocialitemicon} />
            </div>
          </a>
          <a
            href="https://www.instagram.com/rafaraissar/"
            target="_blank"
            onClick={handleClose}
          >
            <div title="go to my instagram" className={styles.menusocialitem}>
              <InstagramIcon className={styles.menusocialitemicon} />
            </div>
          </a>
          <a
            href="http://wa.me/6287815499006"
            target="_blank"
            onClick={handleClose}
          >
            <div title="contact me" className={styles.menusocialitem}>
              <WhatsAppIcon className={styles.menusocialitemicon} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
