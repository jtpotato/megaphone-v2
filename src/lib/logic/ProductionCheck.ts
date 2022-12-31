import { IS_PRODUCTION } from '$env/static/private';
import { isProduction } from 'src/routes/stores';

if (IS_PRODUCTION == 'FALSE') {
	isProduction.set(false);
} else {
	isProduction.set(true);
}
