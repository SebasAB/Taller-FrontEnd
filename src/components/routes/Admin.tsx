import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Project } from '../../model/project';
import { submitProjectData } from '../../utils/mock-response';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #f2f6ff;
  padding-top: 60px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #000;
  margin-bottom: 40px;
`;

const FormWrapper = styled.div`
  background-color: #f9fafe;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 575px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 17px;
  outline: none;
  color: #555;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: #a3bffa;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  width: 100px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.delete {
    background-color: #c22d2d;
    color: white;

    &:hover {
      background-color: #a92323;
    }
  }

  &.post {
    background-color: #7838e0;
    color: white;

    &:hover {
      background-color: #5f2dc1;
    }
  }
`;

const Admin = () => {
  const { t } = useTranslation();

  const formProject: Partial<Project> = {
    title: '',
    description: '',
    link: '',
    tag: '',
    version: ''
  };

  // State for capturing input fields
  const [project, setProject] = useState<Partial<Project>>(formProject);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value
    }));
  };

  // Handle post button click
  const handlePost = async () => {
    console.log('Submitting Project Data:');
    await submitProjectData(project); // Call the mock API function
    console.log('Project Data Submitted Successfully');
  };

  const handleReset = () => {
    setProject(formProject);
  };

  return (
    <Container>
      <Title>Project Input</Title>
      <FormWrapper>
        <Input
          type="text"
          name="title"
          placeholder={t('admin.input_title')}
          value={project.title}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder={t('admin.input_description')}
          value={project.description}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="link"
          placeholder={t('admin.input_link')}
          value={project.link}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="tag"
          placeholder={t('admin.input_tags')}
          value={project.tag}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="version"
          placeholder={t('admin.input_version')}
          value={project.version}
          onChange={handleChange}
        />
        <ButtonGroup>
          <Button className="delete" type="reset" onReset={handleReset}>
            {t('admin.button_delete') != null ? t('admin.button_delete') : 'Delete'}
          </Button>
          <Button className="post" type="button" onClick={handlePost}>
            {t('admin.button_post') != null ? t('admin.button_accept') : 'Post'}
          </Button>
        </ButtonGroup>
      </FormWrapper>
    </Container>
  );
};

export default Admin;
