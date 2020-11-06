class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.replace(/(\d+_)([^.]+.[^.]+)(.+)/, '$2')
    }
}
