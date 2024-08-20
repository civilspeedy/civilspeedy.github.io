import content from '../assets/content.json';

/**
 * Returns all the names of each page to be used for buttons on the home page.
 * @returns A list of page names.
 */
export const buttonLabels = (): string[] => {
    const array: string[] = [];
    for (let page of content) {
        if (page.name !== 'home') {
            array.push(page.name);
        }
    }
    return array;
};

/**
 * Returns object containing a page's content.
 * @param name - the name of page.
 * @returns an object containing the content for the page.
 */
export const getPage = (name: string): any => {
    for (let page of content) {
        if (page.name === name) {
            return page;
        }
    }
    return {};
};
