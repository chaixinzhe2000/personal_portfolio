import React, { useState } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import { Section } from '../Section'
import { ProjectItem } from './ProjectItem'
import Modal from 'react-modal'
import { IProject, ProjectEvolution, ProjectMidPoint, ProjectNudge } from './ProjectDetails'
import './overlay.css'

export function Projects() {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [selectedProject, setSelectedProject] = useState<IProject>(ProjectEvolution)

	function openModal(project: IProject) {
		setSelectedProject(project)
		setModalIsOpen(true)
	}

	function closeModal() {
		setModalIsOpen(false)
	}

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			padding: 0,
			border: 'none',
			boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
			borderRadius: '12px',
		},
	}

	Modal.setAppElement('#root')

	const rightContent = (
		<div css={styles.projectsWrapper}>
			<ProjectItem {...ProjectNudge} toggleOpen={() => openModal(ProjectNudge)} />
			<ProjectItem {...ProjectEvolution} toggleOpen={() => openModal(ProjectEvolution)} />
			<ProjectItem {...ProjectMidPoint} toggleOpen={() => openModal(ProjectMidPoint)} />
		</div>
	)
	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
				overlayClassName="overlay"
			>
				<img
					src={selectedProject.image}
					alt={`Project ${selectedProject.title}`}
					css={styles.image}
				/>
				<div css={styles.modalInfoWrapper}>
					{!selectedProject.link ? (
						<div css={styles.title}>{selectedProject.title}</div>
					) : (
						<div
							css={[styles.pointerCursor, styles.title]}
							onClick={() => window.open(selectedProject.link, '_blank')}
						>
							{selectedProject.title}&nbsp;
							<svg
								css={styles.linkIcon}
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								></path>
							</svg>
						</div>
					)}

					<div css={styles.description}>{selectedProject.description}</div>
					<hr css={styles.divider} />
					<div>Technologies used:</div>
					<div css={styles.technology}>
						{selectedProject.technology.map((tech, i) => {
							return (
								<div css={styles.techItem} key={i}>
									{tech}
								</div>
							)
						})}
					</div>
					<div css={styles.languageTitle}>Languages used:</div>
					<div css={styles.language}>
						{selectedProject.language.map((lan, i) => {
							return (
								<div css={styles.languageItem} key={i}>
									{lan}
								</div>
							)
						})}
					</div>
					<div css={styles.imageCredit}>Image courtesy of the Library of Congress</div>
				</div>
			</Modal>
			<Section left="Projects" right={rightContent} customStyle={styles.wrapper} />
		</div>
	)
}
