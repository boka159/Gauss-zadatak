export type MovieListResponse = {
    page: number;
    results: MovieListItem[];
    total_pages: number;
    total_results: number;

};

export type MovieListItem = {
    backdrop_path: string;
    original_title: string;
    id: number;
    overview: string;
    title: string;
};

