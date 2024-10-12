import { AboutMe } from '../model/aboutme';
import { Project } from '../model/project';

// Existing mock login function
export const mockLogin = (userName: string, password: string) =>
  new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {
      if (userName === 'sebas@email.com' && password === 'sebasdev') {
        resolve(
          JSON.parse(
            `{"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODg0YmJiM2Q0YTRkNDk1ZDYyNGJhYyIsImVtYWlsIjoibHVjYXNmZXJuYW5kZXphcmFnb25AZ21haWwuY29tIiwiaWF0IjoxNjM2MzIyMzA3LCJleHAiOjE2MzYzMjU5MDd9.yxy7uKWXJx5rY8znRBTg5182llyH8Rs9R8C6_SM4LIg" }`
          )
        );
      } else {
        rejected(new Unauthorized());
      }
    }, 2000);
  });
export interface TokenResponse {
  token: string;
}
export interface ApiError {
  description?: string;
}
export class Unauthorized implements ApiError {}

export interface DashboardInfo {
  aboutMe: AboutMe;
  projects: Project[];
}

// Mock function to print the project form data
export const submitProjectData = (project: Partial<Project>) => {
  console.log('Project Data Submitted:', project);
  // Simulate API response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

// Other existing mock functions
export const mockFetchDashboard = () =>
  Promise.all([mockAboutme(), mockProjects()]).then(([aboutMe, projects]) => {
    return {
      aboutMe,
      projects
    };
  });

export const mockAboutme = () =>
  new Promise<AboutMe>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `{
            "id":"12389asdfasf8",
            "name":"Sebastian Aliaga",
            "birthday":950331600000,
            "nationality":"Ecuador",
            "job":"Associate Engineer - Verndale",
            "github":"https://github.com/sebasab"
            }`
        )
      );
    }, 500);
  });

export const mockProjects = () =>
  new Promise<Project[]>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `[
              {
                "id": "airmouse_123",
                "title": "Airmouse Project",
                "description": "Airmouse is a real-time mouse control system using a smartphone's accelerometer sensor. Data is captured using Python and connected via Bluetooth through Realterm.",
                "version": "1.0",
                "link": "https://github.com/SebasAB/AirMouse-Project",
                "tag": "Python, Bluetooth, Realterm, Accelerometer",
                "timestamp": "765817712000"
              },
              {
                "id": "py_dashboard_456",
                "title": "Python Dashboard",
                "description": "A real-time dashboard connected to a DHT-22 sensor, retrieving live temperature and humidity values. Built using Python.",
                "version": "1.0",
                "link": "https://github.com/SebasAB/Python-Dashboard",
                "tag": "Python, DHT-22, Sensor, Dashboard",
                "timestamp": "765817712000"
              },
              {
                "id": "zizumania_789",
                "title": "Zizumania",
                "description": "Zizumania is a 2D platformer game built using Unity, featuring classic platforming mechanics in a colorful and engaging world.",
                "version": "1.0",
                "link": "https://github.com/SebasAB/ZizuMania",
                "tag": "Unity, Game Development, 2D Platformer",
                "timestamp": "765817712000"
              },
              {
                "id": "constellation_101",
                "title": "Constellation4Sitecore",
                "description": "Constellation4Sitecore is a library designed to assist developers working with Sitecore XM Cloud and Next.js. It provides npm modules that simplify the development.",
                "version": "22.1.1",
                "link": "https://github.com/constellation4sitecore/xmcloud-constellation",
                "tag": "Sitecore XM Cloud, Next.js, JavaScript, npm",
                "timestamp": "765817712000"
              }
            ]
            `
        )
      );
    }, 500);
  });
