import {Pipe} from 'angular2/core'

@Pipe({
    name: 'summaryPipe'
})
export class SummaryPipe {
    transform(value: string, args: string[]) : string {
        let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
        let trail = args.length > 1 ? args[1] : '...';

        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}